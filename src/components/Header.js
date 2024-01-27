import { Component } from "react";




export default class Header extends Component{

    render(){
        return(
            <div>
                <h3> {this.props.hdata} </h3>
            </div>
        )
    }

}