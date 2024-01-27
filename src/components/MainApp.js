import {Component} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Users from "./Users";
import AddUser from "./AddUser";


export default class MainApp extends Component {

componentDidMount(){
const json= localStorage.getItem('gog')
const userdata= JSON.parse(json)
if(userdata){
    this.setState(()=> ({userdata}))
}

    }
    componentDidUpdate(){
        const json= JSON.stringify(this.state.userdata)
        localStorage.setItem('gog',json)
    }

    state = {
        userdata: [],
        headerData: 'welcome to header...!'
    }
    addUser = (data) => {

        this.setState((prevState) => {
            return {userdata: prevState.userdata.concat(data)}
        })

    }
    deleteUsers = () => {
        this.setState(() => {
            return {userdata: []}
        })
    }
    deleteUser = (user) => {
        this.setState((prevState) => {
            return {
                userdata: prevState.userdata.filter((option) => user !== option)
            }
        })
    }
    render() {

        return (
            <div>
                <Header hdata={
                    this.state.headerData
                }/>
                <h3>Welcome to main App</h3>
                <Users udata={
                        this.state.userdata
                    }
                    du={
                        this.deleteUsers
                    }
                    hasData={
                        this.state.userdata.length > 0
                    }
                    dUser={
                        this.deleteUser
                    }/>
                <AddUser au={
                    this.addUser
                }/>
                <Footer/>
            </div>
        )
    }

}
