import { getData } from '@utils/httpClient';

export const contactGetList = () => {
  return getData('/contact');
};
