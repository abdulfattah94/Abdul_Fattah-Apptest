import React, { useMemo } from 'react';
import { View, TextInput } from 'react-native';
import { Colors } from '@configs/index';
import Styles from './styles';
import { TextL, TextS } from '@components-derivatives/text';
import InputStringTypes from '@components-derivatives/input/inputString/types';
import colors from '@configs/colors';

export default function InputString(props: InputStringTypes) {
  const {
    value,
    textInputStyle,
    containerStyle,
    error,
    onChangeText,
    testID,
    placeholder,
    label,
  } = props;

  const _renderError = useMemo(() => {
    if (!error) {
      return null;
    }

    return (
      <TextS style={{ marginTop: 4 }} color={Colors.bloodRed}>
        {error}
      </TextS>
    );
  }, [error]);

  const RenderMain = useMemo(() => {
    return (
      <View style={[Styles.inputContainer, containerStyle ?? {}]}>
        {label && (
          <TextL textStyle="bold" style={Styles.label}>
            {label}
          </TextL>
        )}
        <View style={Styles.rowCenter}>
          <TextInput
            {...props}
            value={value}
            placeholder={placeholder}
            onChangeText={(val: string) => onChangeText(val)}
            style={[
              Styles.input,
              textInputStyle ?? {},
              {
                borderColor: error ? Colors.baseRed : Colors.white005,
              },
            ]}
            testID={testID}
            placeholderTextColor={colors.placeholderTextColor}
            autoCorrect={false}
            underlineColorAndroid="transparent"
          />
        </View>
        {_renderError}
      </View>
    );
  }, [
    containerStyle,
    label,
    props,
    value,
    placeholder,
    textInputStyle,
    error,
    testID,
    _renderError,
    onChangeText,
  ]);

  return RenderMain;
}
