import apiInstance from "./apiInstance";
import apiRoutes from "./apiRoutes";

class API {
  // Auth calls
  static login(email, password) {
    const data = { email, password };

    return apiInstance.post(apiRoutes.LOGIN, data);
  }

  static signup(username, email, password, confirmPassword, code) {
    const data = {
      username,
      email,
      password,
      confirmPassword
    };

    const config = {
      params: {
        code
      }
    };

    return apiInstance.post(apiRoutes.SIGNUP, data, config);
  }

  // Todos calls

  // Projects calls
}

export default API;