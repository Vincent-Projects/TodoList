export const getLoginRoute = () => "/auth/login";
export const getSignupRoute = (code: string | number) => `/auth/signup/${code}`;
export const getValidateAccountRoute = (token: string) => `/auth/verify/${token}`;

export const getGETTodosRoute = () => "/todos";
export const getPOSTTodosRoute = () => "/todos";
export const getPUTTodosRoute = (taskId: string, urlParams: string) => `/todos/${taskId}?fields=${urlParams}`;
export const getDELETETodosRoute = (taskId: string) => `/todos/${taskId}`;
