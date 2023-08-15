import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import { PadderContainer } from '@components-containers/index';
import { CenterModal } from '@components-modals/index';
import { Colors, Sizes } from '@configs/index';
import { TextL, TextXL, TextM } from '@components-derivatives/text';
import { ButtonFull } from '@components-derivatives/button';
import RNRestart from 'react-native-restart';

interface IProps {
  children?: any;
}

function ErrorFallback(props: any) {
  const { error } = props;
  const [showAlertModal, setShowAlertModal] = useState<boolean>(true);

  return (
    <CenterModal
      noSwipe
      style={Styles.modalContainer}
      isActive={showAlertModal}
      backPress={() => {}}
    >
      <View style={Styles.headerTitle}>
        <View>
          <TextXL
            textStyle="medium"
            style={Styles.textCenter}
            color={Colors.white}
          >
            Oops, there is an error
          </TextXL>
          <TextL />
          <TextM align="center" color={Colors.white}>
            We have reported this to our team. Please close the application and
            reopen it. {'\n'}
            {error.toString()}
          </TextM>
        </View>
        <PadderContainer style={Styles.buttonContainer}>
          <ButtonFull
            width={Sizes.screen.width - 80}
            height={40}
            textColor={Colors.white}
            backgroundColor={Colors.baseRed}
            color={Colors.baseRed}
            onPress={() => {
              setShowAlertModal(false);
              RNRestart.restart();
            }}
          >
            Let's reopen
          </ButtonFull>
        </PadderContainer>
      </View>
    </CenterModal>
  );
}

export default function ErrorBoundaryContainer(props: IProps) {
  const { children } = props;
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
}

const Styles = StyleSheet.create({
  modalContainer: {
    width: Sizes.screen.width - 40,
    borderRadius: 16,
    paddingHorizontal: 10,
    backgroundColor: Colors.darkBlue,
    borderColor: Colors.baseRed,
  },
  headerTitle: {
    alignItems: 'center',
    marginVertical: 30,
  },
  buttonContainer: {
    marginTop: 40,
  },
  textCenter: {
    lineHeight: 24,
    textAlign: 'center',
  },
});
