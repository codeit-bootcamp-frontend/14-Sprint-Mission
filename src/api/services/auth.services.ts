import requestor from '../client/requestor';

class AuthService {
  signUp() {}
  login() {
    return requestor;
  }
  logout() {}
}

const authService = new AuthService();

export default authService;
