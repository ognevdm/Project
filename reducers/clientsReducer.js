// событие redux
const ADD_CLIENS = 'clients\ADD_CLIENS';


// начальные данные
const initialValue = [];

// логика редюсера
const clientsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_CLIENS:
      return [ ...state, action.payload ];
    default:
      return state;
  }
};

// экспортируем редюсер
export default clientsReducer;

// действие ADD_CLIENS в котором передаем клиента
export const addClient = (client) => ({
  type: ADD_CLIENS,
  payload: client
})