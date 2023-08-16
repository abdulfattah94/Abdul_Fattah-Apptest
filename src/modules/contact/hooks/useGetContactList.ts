import { useMutation } from '@tanstack/react-query';
import * as services from '@modules/contact/services/index';

const useGetContactList = () => {
  const data: any = useMutation(() => {
    return services.contactGetList();
  });
  return data;
};

export default useGetContactList;
