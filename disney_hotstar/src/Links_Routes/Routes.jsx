import React from "react"
import {Route} from "react-router-dom"
import {Link_data} from "./Links"
import {Links} from "./Links"
import Home from "../Components/Home"
function Routes(){
        return (
            <div>
                <Links/>
                <Route exact path="/" render={()=><Home/>} />
                {Link_data.map((item)=>{
                   return <Route key={item.to} path={item.to} render={()=>item.render}></Route>
                })}
            </div>
        )
}

export default Routes