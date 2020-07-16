export const updateObjectInList = (list, objectId, objectUpdate) => {
  const objectIndex = list.findIndex(object => object.id == objectId);
  const object = list[objectIndex];
  const updatedObject = { ...object, ...objectUpdate };

  if (list.length === 0) return [updatedObject];

  return [
    ...list.slice(0, objectIndex),
    updatedObject,
    ...list.slice(objectIndex + 1, list.length)
  ];
};
