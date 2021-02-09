import { Log_Out } from "./Actiontype";
import {
  Get_Users_Failure,
  Get_Users_Success,
  Get_Users_Request,
} from "./Actiontype";

const initstate = {
  user:false,
  login_error: false,
  login_Loading: false,
};

export const reducer = (state = initstate, { type, payload }) => {
  switch (type) {
      case Log_Out:
          return{
              user:false
          }
    case Get_Users_Request:
      return {
        ...state,
        login_Loading: true,
        login_error:false
      };
    case Get_Users_Success:
       let error=payload.length===0?true:false;
       let user_data=payload.length===0?false:payload;
      return {
        ...state,
        user: user_data,
        login_error: error,
        login_Loading: false,
      };
    case Get_Users_Failure:
      return {
        ...state,
        login_error:true,
        login_Loading: false,
      };

    default:
      return state;
  }
};
