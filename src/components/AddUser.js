import { Component } from "react";




export default class AddUser extends Component{

    addUser=(e)=>{
        e.preventDefault()
        const inputdata=e.target.elements.uname.value
        this.props.au(inputdata)
    }
    render(){
        return(
            <div>
                 <form onSubmit={this.addUser}>
                 UserName:<input type='text' name='uname'/>
                 <button>Add User</button>
                 </form>
            </div>
        )
    }

}