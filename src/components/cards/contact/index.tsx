import { TextL, TextXL } from '@components-derivatives/text';
import React, { useMemo } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from './styles';
import { useTheme } from '@react-navigation/native';
import { ImageUri } from '@components-derivatives/image';

export default function Contact(props: any) {
  const { data, onPressEdit, onPressDelete } = props;
  const { colors } = useTheme();

  const RenderMain = useMemo(() => {
    return (
      <View style={Styles.heading}>
        <ImageUri
          uri={data.photo}
          resizeMode="cover"
          style={Styles.imgCircle}
        />
        <View style={{ flex: 1 }}>
          <TextXL textStyle="bold">
            {data.firstName} {data.lastName}
          </TextXL>
          <TextL>{data.age} yo</TextL>
        </View>
        <View style={{ alignSelf: 'flex-end' }}>
          <View style={Styles.actionIcon}>
            <TouchableOpacity onPress={onPressDelete} style={Styles.mr12}>
              <Icon name="trash" size={20} color={colors.text} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressEdit}>
              <Icon name="pencil" size={20} color={colors.text} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }, [
    colors.text,
    data.age,
    data.firstName,
    data.lastName,
    data.photo,
    onPressDelete,
    onPressEdit,
  ]);

  return RenderMain;
}
