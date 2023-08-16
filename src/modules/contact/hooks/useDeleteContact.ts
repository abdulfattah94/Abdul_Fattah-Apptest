import { useMutation } from '@tanstack/react-query';
import * as services from '@modules/contact/services/index';
import { IContact } from '../types';

const useDeleteContact = () => {
  const data: any = useMutation((params: IContact) => {
    return services.contactDelete(params);
  });
  return data;
};

export default useDeleteContact;
