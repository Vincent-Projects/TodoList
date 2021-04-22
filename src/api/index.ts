import apiInstance from "./apiInstance";
import {
  getLoginRoute,
  getSignupRoute,
  getValidateAccountRoute,
  getGETTodosRoute,
  getPOSTTodosRoute,
  getPUTTodosRoute,
  getDELETETodosRoute,
} from "./apiRoutes";

class API {
  // Auth calls
  static login(email: string, password: string) {
    const data = { email, password };

    return apiInstance.post(getLoginRoute(), data);
  }

  static signup(firstname: string, lastname: string, email: string, password: string, confirmPassword: string, code: string) {
    const data = {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
    };

    return apiInstance.post(getSignupRoute(code), data);
  }

  static validateAccount(token: string) {
    return apiInstance.get(getValidateAccountRoute(token));
  }

  // Todos calls
  static getTasks(token: string) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return apiInstance.get(getGETTodosRoute(), config);
  }

  static postTodo(token: string, task: string) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const data = {
      task: task,
    };

    return apiInstance.post(getPOSTTodosRoute(), data, config);
  }

  static updateTask(token: string, itemId: string, updatedData: string) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const fields = Object.keys(updatedData);
    const urlParams = fields.join(";");

    return apiInstance.put(
      getPUTTodosRoute(itemId, urlParams),
      updatedData,
      config
    );
  }

  static deleteTask(token: string, itemId: string) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return apiInstance.delete(getDELETETodosRoute(itemId), config);
  }
  // Projects calls
}

export default API;
