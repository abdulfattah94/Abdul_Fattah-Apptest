import React, { useEffect, useMemo, useCallback, useState } from 'react';
import { FlatList, View } from 'react-native';
import { size } from 'lodash';
import { useTheme } from '@react-navigation/native';
import { IProps, IContact } from '@modules/contact/types';
import { BaseContainer, PadderContainer } from '@components-containers/index';
import { store } from '@configs/store';
import { useGetContactList } from '@modules/contact/hooks/index';
import Styles from './styles';
import { ContactCard } from '@components-cards/index';

export default function ContactMain(props: IProps) {
  const { navigation } = props;

  const { colors } = useTheme();

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
    if (isConnected) {
      getContactList();
    }
  }, [getContactList, isConnected]);

  const RenderContactItem = useCallback((item: IContact) => {
    return <ContactCard data={item} />;
  }, []);

  const RenderContactList = useMemo(() => {
    return (
      <FlatList<IContact>
        data={contactList}
        keyExtractor={(_item, idx) => idx.toString()}
        renderItem={({ item }) => RenderContactItem(item)}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={Styles.mb16} />}
        contentContainerStyle={Styles.pb40}
      />
    );
  }, [RenderContactItem, contactList]);

  const RenderMain = useMemo(() => {
    return (
      <BaseContainer title={`Contact List (${size(contactList)})`} isStatic>
        <PadderContainer style={{ flex: 1 }}>
          {RenderContactList}
        </PadderContainer>
      </BaseContainer>
    );
  }, [contactList, RenderContactList]);

  return RenderMain;
}
