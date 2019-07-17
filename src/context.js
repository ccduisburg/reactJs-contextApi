//iki yapi kullanacagiz
//1.provider 2. consumer provider tarafindan gönderilen datalari kullanmak icin--saglayici ve tüketici
import React, { Component } from 'react'
import Axios from 'axios';

//reducer in görevi stati güncellemek

const UserContext=React.createContext();

//provider,consumer
const reducer=(state,action)=>{
    switch(action.type){
        case "DELETE_USER":
        return{
            ...state,
            users: state.users.filter(user=>action.payload!==user.id)
        }
        case "ADD_USER":
        return{
            ...state,
            users:[...state.users,action.payload]
           // users: state.users.push(action.payload)
        }      
    
    case "UPDATE_USER":
    return{
        ...state,
        users:state.users.map(user=>user.id===action.payload.id ? action.payload:user)
    
    }
    default:
    return state
}
}

export class UserProvider extends Component {

    state={
        users:[     
        ],
        dispatch : action => {
            this.setState(state=>reducer(state,action))
        }

      }

   componentDidMount= async ()=> {
    const response=await Axios.get("http://localhost:3004/users")//veri dönene kadar bekleyecek (await) sadece async fonksiyonlarda kullaniliyor    
    this.setState({
        users:response.data
    })
       
   }
   
  render() {//value context in icindeki userprovider in icindeki state i gönderen bir props //{this.props.children} App componentini temsil ediyor
    return (
     <UserContext.Provider value={this.state}>
         {this.props.children}
     </UserContext.Provider>
    )
  }
}
const UserConsumer=UserContext.Consumer;
export default UserConsumer;

