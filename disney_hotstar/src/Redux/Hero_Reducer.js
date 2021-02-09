import {
    Hero_Show_Request,
    Hero_Show_Success,
    Hero_Show_Failure
  } from "./Actiontype";


const initstate={
    Hero_shows:[],
    Hero_error: false,
    Hero_Loading: false,
}

export const hero=(state=initstate,{type,payload})=>{
    switch(type){
       case Hero_Show_Failure:
           return{
            Hero_error:true,
               Searched_Loading:false
           }
        case  Hero_Show_Success:
            return{
                Hero_shows:payload,
                Hero_error:false,
                Hero_Loading:false
            }
        case  Hero_Show_Request:
            return{
                Hero_error:false,
                Hero_Loading:true
            }
        default:
            return state
    }
}