import React, { useMemo, useCallback, useState, useEffect } from 'react';
import { View } from 'react-native';
import { debounce } from 'lodash';
import { useTheme } from '@react-navigation/native';
import { IProps, IContact, IErrorOptions } from '@modules/contact/types';
import { BaseContainer, PadderContainer } from '@components-containers/index';
import Styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { ButtonFull } from '@components-derivatives/button';
import { TextXL } from '@components-derivatives/text';
import { Sizes } from '@configs/index';
import { InputString } from '@components-derivatives/input';
import { isValidUrlString } from '@utils/commons';
import {
  useCreateContact,
  useUpdateContact,
} from '@modules/contact/hooks/index';

export default function ContactForm(props: IProps) {
  const { navigation, route } = props;

  const { params } = route;

  const { colors } = useTheme();

  const [form, setForm] = useState<IContact>({
    firstName: '',
    lastName: '',
    age: '',
    photo: '',
  });
  const [originData, setOriginData] = useState<IContact>({
    firstName: '',
    lastName: '',
    age: '',
    photo: '',
  });
  const [error, setError] = useState<IErrorOptions>({
    firstName: '',
    lastName: '',
    age: '',
    photo: '',
  });

  const { mutate: createContactMutation, isLoadingCreateContact } =
    useCreateContact();
  const { mutate: updateContactMutation, isLoadingUpdateContact } =
    useUpdateContact();

  const onClearForm = useCallback(() => {
    setForm({
      firstName: '',
      lastName: '',
      age: '',
      photo: '',
    });
    setOriginData({
      firstName: '',
      lastName: '',
      age: '',
      photo: '',
    });
    setError({
      firstName: '',
      lastName: '',
      age: '',
      photo: '',
    });
  }, []);

  const onValidation = useCallback((value: string, name: string) => {
    if (name === 'firstName' || name === 'lastName') {
      const errVal = value.length < 3 ? 'Minimum 3 characters' : '';

      setError((prevState) => ({
        ...prevState,
        [name]: errVal,
      }));
    }

    if (name === 'photo') {
      const errVal = !isValidUrlString(value) ? 'URL invalid' : '';

      setError((prevState) => ({
        ...prevState,
        [name]: errVal,
      }));
    }

    if (name === 'age') {
      const errVal = Number(value) < 1 ? 'Invalid age' : '';

      setError((prevState) => ({
        ...prevState,
        [name]: errVal,
      }));
    }
  }, []);

  const onValidationDelayed = debounce(onValidation, 1000);

  const onChangeText = useCallback(
    (value: string, name: string) => {
      setForm((prev) => ({ ...prev, [name]: value }));
      onValidationDelayed(value, name);
    },
    [onValidationDelayed],
  );

  const onSubmit = useCallback(() => {
    const isFormValid =
      Object.values(error).every((x) => x === '') &&
      Object.values(form).every((x) => x !== '');

    if (isFormValid) {
      const sendData = {
        ...form,
        age: Number(form.age),
      };

      if (
        form?.firstName !== originData?.firstName ||
        form?.lastName !== originData?.lastName ||
        form?.age !== originData?.age ||
        form?.photo !== originData?.photo
      ) {
        if (!params) {
          delete sendData.id;
          createContactMutation(sendData, {
            onSuccess() {
              onClearForm();
              navigation?.pop();
            },
          });
        } else {
          updateContactMutation(sendData, {
            onSuccess() {
              onClearForm();
              navigation?.pop();
            },
          });
        }
      }
    }
  }, [
    error,
    form,
    originData?.firstName,
    originData?.lastName,
    originData?.age,
    originData?.photo,
    params,
    createContactMutation,
    onClearForm,
    navigation,
    updateContactMutation,
  ]);

  useEffect(() => {
    if (params) {
      const { data } = params;
      setForm({
        ...data,
        age: data.age.toString(),
      });
      setOriginData({
        ...data,
        age: data.age.toString(),
      });
    }
  }, [params]);

  const RenderForm = useMemo(() => {
    return (
      <PadderContainer>
        <InputString
          value={form?.firstName}
          label="First Name"
          onChangeText={(val: string) =>
            onChangeText(val.replace(' ', ''), 'firstName')
          }
          testID="firstName"
          error={error.firstName}
        />
        <InputString
          value={form?.lastName}
          label="Last Name"
          onChangeText={(val: string) =>
            onChangeText(val.replace(' ', ''), 'lastName')
          }
          testID="lastName"
          error={error.lastName}
        />
        <InputString
          value={form?.age}
          label="Age"
          onChangeText={(val: string) => {
            if (val.length === 1 && val === '0') {
              onChangeText('', 'age');
            } else {
              const numberFix = val.replace(
                /^(-)|[.,](?=[^.,]*[.,](?!$))|[,.]+$|[^0-9.,]+/g,
                '',
              );
              onChangeText(numberFix, 'age');
            }
          }}
          testID="age"
          error={error.age}
          keyboardType="phone-pad"
        />
        <InputString
          value={form?.photo}
          label="Photo (URL)"
          onChangeText={(val: string) => onChangeText(val, 'photo')}
          testID="photo"
          error={error.photo}
          autoCapitalize="none"
        />
      </PadderContainer>
    );
  }, [
    error.age,
    error.firstName,
    error.lastName,
    error.photo,
    form?.age,
    form?.firstName,
    form?.lastName,
    form?.photo,
    onChangeText,
  ]);

  const RenderBottomContent = useMemo(() => {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={['transparent', colors.background]}
        style={Styles.bottomContent}
      >
        <ButtonFull
          backgroundColor={colors.turquoise}
          borderColor="transparent"
          width={Sizes.screen.width - 40}
          onPress={() => onSubmit()}
          buttonLoading={isLoadingCreateContact || isLoadingUpdateContact}
          disabled={isLoadingCreateContact || isLoadingUpdateContact}
        >
          <TextXL textStyle="bold">{params ? 'Update' : 'Save'}</TextXL>
        </ButtonFull>
      </LinearGradient>
    );
  }, [
    colors.background,
    colors.turquoise,
    isLoadingCreateContact,
    isLoadingUpdateContact,
    onSubmit,
    params,
  ]);

  const RenderMain = useMemo(() => {
    return (
      <BaseContainer
        title={params ? 'Update Contact' : 'Create New Contact'}
        onBackPress={() => navigation?.pop()}
      >
        <View style={Styles.container}>
          {RenderForm}
          {RenderBottomContent}
        </View>
      </BaseContainer>
    );
  }, [RenderBottomContent, RenderForm, navigation, params]);

  return RenderMain;
}
