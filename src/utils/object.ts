export const objectIsEmpty = (object: any) => {
  return object instanceof Object && Object.keys(object).length === 0;
};