import {axiosMethod, axiosRequest} from '../../utils/fetchUtil';

const apiEndPoint = 'http://103.229.41.59';
const authenEndPoint = apiEndPoint + '/api/TokenAuth';

export const authenAPI = {
  loginAPI: data => {
    return axiosRequest(
      authenEndPoint + '/Authenticate',
      axiosMethod.POST,
      null,
      null,
      data,
    );
  },

  registerAPI: data => {
    return axiosRequest(
      'http://103.229.41.59/api/services/app/Account/Register',
      axiosMethod.POST,
      null,
      null,
      data,
    );
  },
};
