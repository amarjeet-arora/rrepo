import { Component } from "react";
 import User from "./User";




export default class Users extends Component{

    render(){
        return(
            <div>
              
                 <button class="btn btn-primary" disabled={!this.props.hasData} onClick={this.props.du} >Delete All</button>
                {
                    this.props.udata.map((data) => 
                    <User key={data} ud={data} du={this.props.dUser}/>)
                }
               
            </div>
        )
    }

}