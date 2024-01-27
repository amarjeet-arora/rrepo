import { Component } from "react";




export default class User extends Component{

    render(){
        return(
            <div>
                <h3>{this.props.ud} </h3>
                <button onClick={()=> this.props.du(this.props.ud)}>Delete</button>
            </div>
        )
    }

}