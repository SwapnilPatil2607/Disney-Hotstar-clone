import {
Watch_Later_Success ,
} from "./Actiontype"; 

const initstate = {
 watch_later:[],
 watch_later_error: false,
 watch_Loading: false,
};

export const watch_later = (state = initstate, { type, payload }) => {
  
  switch (type) {
  
      //<--watch Later--->
      case Watch_Later_Success:
        let wList=payload.filter((item,index)=>{
      return payload.indexOf(item)===index})
       return {
         ...state,
         watch_later:[...wList],
         watch_later_error: false,
         watch_Loading: false,
       };
    default:
      return state;
  }
};
