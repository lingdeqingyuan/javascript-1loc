export const multiObjEqual = (...objects) => {
  return objects.every(obj => JSON.stringify(obj) === JSON.stringify(objects[0]));
}
