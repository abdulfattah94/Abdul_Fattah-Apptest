import { TextL, TextM } from '@components-derivatives/text';
import { Colors, Sizes, Themes } from '@configs/index';
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { CenterModal } from '@components-modals/index';
import { useTheme } from '@react-navigation/native';

type IProps = {
  isActive: boolean;
  onBackPress: () => void;
  onSubmit: () => void;
  onCancel?: () => void;
  buttonTitle: string;
  buttonTitleColor?: string;
  cancelTitle?: string;
  title: string;
  desc: string;
  isSLow?: boolean;
  backgroundColor?: string;
};

function ConfirmationModaUpdate(props: IProps) {
  const { colors } = useTheme();
  const {
    isActive,
    onBackPress,
    onSubmit,
    buttonTitle,
    buttonTitleColor,
    cancelTitle,
    onCancel,
    title,
    desc,
    isSLow,
    backgroundColor,
  } = props;
  return (
    <CenterModal
      noSwipe
      style={[
        Styles.modalContainer,
        { backgroundColor: backgroundColor ?? colors.bgModal },
      ]}
      isActive={isActive}
      backPress={onBackPress}
      isSLow={isSLow}
      backDropColor={colors.blue08}
    >
      <View style={Styles.headerTitle}>
        <View>
          <TextL
            textStyle="bold"
            style={Styles.textCenter}
            color={Colors.white}
          >
            {title}
          </TextL>
          <TextL />
          <TextM align="center" color={Colors.white08}>
            {desc}
          </TextM>
        </View>
        <View style={Styles.buttonContainer}>
          {cancelTitle ? (
            <TouchableOpacity style={Styles.button} onPress={onCancel}>
              <TextL textStyle="bold">{cancelTitle}</TextL>
            </TouchableOpacity>
          ) : null}
          {cancelTitle ? <View style={Styles.line} /> : null}

          <TouchableOpacity style={Styles.button} onPress={onSubmit}>
            <TextL
              color={buttonTitleColor || 'rgba(34, 195, 145, 1)'}
              textStyle="bold"
            >
              {buttonTitle}
            </TextL>
          </TouchableOpacity>
        </View>
      </View>
    </CenterModal>
  );
}

const Styles = StyleSheet.create({
  modalContainer: {
    width: Sizes.screen.width - 60,
    borderRadius: 16,
    paddingHorizontal: 10,
  },
  headerTitle: {
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 24,
  },
  buttonContainer: {
    marginTop: 24,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  textCenter: {
    lineHeight: 24,
    textAlign: 'center',
  },
  line: {
    height: '100%',
    width: 1,
    backgroundColor: Themes.colors.white005,
  },
});

export default ConfirmationModaUpdate;
