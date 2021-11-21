const ADD_CLIENS = 'clients\ADD_CLIENS';

const initialValue = [];

const clientsReducer = (state, action) => {
  switch (action.type) {
    case ADD_CLIENS:
      return [ ...state, action.payload ];
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export default clientsReducer;

export const addClient = (client) => ({
  type: ADD_CLIENS,
  payload: client
})