const REGISTRATION = 'profile\REGISTRATION'

const initionalState = {
    id: undefined,
    name: '',
    surname: '',
    telephone: '',
    e_mail: '',
    position: 'регистрация',
    signedUp: false,
    
  };
  
  const profileReducer = (state = initionalState, action) => {
    switch (action.type) {
      case REGISTRATION:
        return {...action.payload.user, signedUp:true };
      default:
        return state;
    }
  };

export default profileReducer;

export const registration = (user) =>({
    type: REGISTRATION,
    payload: {user}
});

