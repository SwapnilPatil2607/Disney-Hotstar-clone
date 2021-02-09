import {Search_Movies_Request,Search_Movies_Success,Search_Movies_Failure} from "./Actiontype"


const initstate={
    Searched_movies:[],
    Searched_error: false,
    Searched_Loading: false,
}

export const searched=(state=initstate,{type,payload})=>{
    switch(type){
       case Search_Movies_Failure:
           return{
               Searched_error:true,
               Searched_Loading:false
           }
        case Search_Movies_Success:
            return{
                Searched_movies:payload,
                Searched_error:false,
                Searched_Loading:false
            }
        case Search_Movies_Request:
            return{
                Searched_error:false,
                Searched_Loading:true
            }
        default:
            return state
    }
}