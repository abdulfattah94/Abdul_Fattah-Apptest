import React, { useEffect, useMemo, useCallback, useState } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { size } from 'lodash';
import { useTheme, useIsFocused } from '@react-navigation/native';
import { IProps, IContact } from '@modules/contact/types';
import { BaseContainer } from '@components-containers/index';
import { store } from '@configs/store';
import { useGetContactList } from '@modules/contact/hooks/index';
import Styles from './styles';
import { ContactCard } from '@components-cards/index';
import LinearGradient from 'react-native-linear-gradient';
import { ButtonFull } from '@components-derivatives/button';
import { TextXL } from '@components-derivatives/text';
import { Sizes } from '@configs/index';
import { ROUTERS } from '@routes/index';

export default function ContactMain(props: IProps) {
  const { navigation } = props;

  const { colors } = useTheme();
  const isFocused = useIsFocused();

  const { isConnected } = store.getState().network;

  const [isPageLoading, setIsPageLoading] = useState<boolean>(true);
  const [contactList, setContactList] = useState<IContact[]>([]);

  const { mutate: getContactListMutation } = useGetContactList();

  const getContactList = useCallback(() => {
    getContactListMutation(
      {},
      {
        onSuccess(data: any) {
          const contactData = data?.data?.data ?? [];
          setContactList(contactData);
          setIsPageLoading(false);
        },
      },
    );
  }, [getContactListMutation]);

  useEffect(() => {
    if (isFocused && isConnected) {
      getContactList();
    }
  }, [getContactList, isConnected, isFocused]);

  const RenderContactItem = useCallback(
    (item: IContact) => {
      return (
        <ContactCard
          data={item}
          onPressEdit={() =>
            navigation?.navigate(ROUTERS.ContactForm, { data: item })
          }
        />
      );
    },
    [navigation],
  );

  const RenderContactList = useMemo(() => {
    return (
      <FlatList<IContact>
        data={contactList}
        keyExtractor={(_item, idx) => idx.toString()}
        renderItem={({ item }) => RenderContactItem(item)}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={Styles.mb16} />}
        contentContainerStyle={Styles.contactListContainer}
      />
    );
  }, [RenderContactItem, contactList]);

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
          onPress={() => navigation?.navigate(ROUTERS.ContactForm)}
        >
          <TextXL textStyle="bold">Create New</TextXL>
        </ButtonFull>
      </LinearGradient>
    );
  }, [colors.background, colors.turquoise, navigation]);

  const RenderMain = useMemo(() => {
    return (
      <BaseContainer title={`Contact List (${size(contactList)})`} isStatic>
        {isPageLoading ? (
          <View style={Styles.emptyContainer}>
            <ActivityIndicator color={colors.turquoise} />
          </View>
        ) : (
          <View style={{ flex: 1, position: 'relative' }}>
            {RenderContactList}
            {RenderBottomContent}
          </View>
        )}
      </BaseContainer>
    );
  }, [
    contactList,
    isPageLoading,
    colors.turquoise,
    RenderContactList,
    RenderBottomContent,
  ]);

  return RenderMain;
}
