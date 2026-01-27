export const myAction = (payload) => ({
  type: "ADD",
  payload
});

export const deleteAction = (index) => ({
  type: "DELETE",
  payload: index
});

export const selectEdit = (index, value) => ({
  type: "SELECT_EDIT",
  payload: { index, value }
});

export const updateAction = (index, value) => ({
  type: "UPDATE",
  payload: { index, value }
});
