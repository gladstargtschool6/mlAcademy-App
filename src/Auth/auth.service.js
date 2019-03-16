import * as Msal from 'msal';
import { initializeUserWithUid } from '../helpers/apiLink';

const applicationConfig = JSON.parse(process.env.REACT_APP_AD_CONFIG);

const options = {
  postLogoutRedirectUri: `${process.env.REACT_APP_ROOT_URL}/logout`,
};

export default class AuthService {
  constructor() {
    this.app = new Msal.UserAgentApplication(applicationConfig.clientID, '', () => {}, options);
  }

  login() {
    return this.app.loginPopup(applicationConfig.graphScopes).then(
      () => {
        const user = this.app.getUser();
        if (user) {
          initializeUserWithUid(user.userIdentifier);
          return user;
        } else {
          return null;
        }
      },
      () => null
    );
  }

  logout() {
    this.app.logout();
  }
}
