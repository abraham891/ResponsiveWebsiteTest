import {REGISTER_USER} from './actions';

const initialuserData = {
  userDetails:{}
};

export const registerReducer = (userData = initialuserData, action) => {
  switch (action.type) {
    case REGISTER_USER:
      const data = { ...userData, userDetails : action.payload };
      return data.userDetails;
    default:
      return userData.userDetails;
  }
};
