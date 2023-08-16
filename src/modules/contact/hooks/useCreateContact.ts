import { useMutation } from '@tanstack/react-query';
import * as services from '@modules/contact/services/index';
import { IContact } from '../types';

const useCreateContact = () => {
  const data: any = useMutation((params: IContact) => {
    return services.contactCreateNew(params);
  });
  return data;
};

export default useCreateContact;
