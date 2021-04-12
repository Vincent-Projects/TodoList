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

  static validateAccount(token) {
    return apiInstance.get(`${apiRoutes.VALIDATE_ACCOUNT}/${token}`);
  }

  // Todos calls
  static getTasks(token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return apiInstance.get(`${apiRoutes.GET_TODO}`, config);
  }

  static postTodo(token, task) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const data = {
      task: task,
    };

    return apiInstance.post(apiRoutes.POST_TODO, data, config);
  }

  static updateTask(token, itemId, updatedData) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    const fields = Object.keys(updatedData);
    const urlParams = fields.join(";");

    return apiInstance.put(`${apiRoutes.POST_TODO}/${itemId}?fields=${urlParams}`, updatedData, config);
  }
  // Projects calls
}

export default API;
