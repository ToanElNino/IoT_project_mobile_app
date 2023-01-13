import {axiosMethod, axiosRequest} from '../../utils/fetchUtil';

class UserCityNotificationAPI {
  constructor() {
    this.apiEndpoint = 'http://103.229.41.59';
    this.userCityNotificationApiEndpoint =
      this.apiEndpoint + '/api/services/app/UserCityNotification';
  }

  getAllNotificationUserTenant(filter, token) {
    return axiosRequest(
      this.orderApiEndpoint + '/GetAllNotificationUserTenant',
      axiosMethod.GET,
      token,
      filter,
      null,
    );
  }
  getAllComment(filter, token) {
    return axiosRequest(
      this.orderApiEndpoint + '/GetAllComment',
      axiosMethod.GET,
      token,
      filter,
      null,
    );
  }
}

export default new UserCityNotificationAPI();
