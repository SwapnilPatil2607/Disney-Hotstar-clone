import React from "react"
import {Route} from "react-router-dom"
import {Link_data} from "./Links"
import {Links} from "./Links"
function Routes(){
        return (
            <div>
                <Links/>
                <Route path="/"></Route>
                {Link_data.map((item)=>{
                   return <Route key={item.to} path={item.to}></Route>
                })}
            </div>
        )
}

export default Routes