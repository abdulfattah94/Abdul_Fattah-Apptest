import { useMutation } from '@tanstack/react-query';
import * as services from '@modules/contact/services/index';
import { IContact } from '../types';

const useUpdateContact = () => {
  const data: any = useMutation((params: IContact) => {
    return services.contactUpdate(params);
  });
  return data;
};

export default useUpdateContact;
