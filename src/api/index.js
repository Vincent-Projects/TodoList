import apiInstance from "./apiInstance";
import apiRoutes from "./apiRoutes";

class API {
  // Auth calls
  static login(email, password) {
    const data = { email, password };

    return apiInstance.post(apiRoutes.LOGIN, data);
  }

  static signup(firstname, lastname, email, password, confirmPassword, code) {
    const data = {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
    };

    return apiInstance.post(`${apiRoutes.SIGNUP}/${code}`, data);
  }

  // Todos calls

  // Projects calls
}

export default API;
