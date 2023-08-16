import { getData, postData, putData } from '@utils/httpClient';
import { IContact } from '../types';

export const contactGetList = () => {
  return getData('/contact');
};

export function contactCreateNew(params: IContact) {
  return postData('/contact', {
    ...params,
  });
}

export function contactUpdate(params: IContact) {
  return putData(`/contact/${params.id}`, {
    ...params,
  });
}
