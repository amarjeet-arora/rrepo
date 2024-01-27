import axios from 'axios'
import {Component} from 'react';

//const URL='https://jsonplaceholder.typicode.com/users'
const URL='http://localhost:4000/loadusers'
export class AxiosDemo extends Component {

    state={
        userdata:[]
    }

componentDidMount(){
    axios.get(URL).then(response => response.data)
    .then((data)=>{
        console.log(data);
        this.setState({userdata:data})
        
    })
}
    render() {
        return (
            <div>
      

                <hr/>
                {this.state.userdata.map((user)=>(
                    <div key={user.id}>
                        {user.uname}--{user.email}
                        </div>
                ))}
            </div>
        )
    }
}
