export const updateObjectInList = (list, objectId, updateObject) => {
  const objectIndex = list.findIndex(object => object.id === objectId);
  const object = list[objectIndex];

  return [
    ...list.slice(0, objectIndex),
    { ...object, ...updateObject },
    ...list.slice(objectIndex + 1, list.length)
  ];
}
