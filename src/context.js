//iki yapi kullanacagiz
//1.provider 2. consumer provider tarafindan gönderilen datalari kullanmak icin--saglayici ve tüketici
import React, { Component } from 'react'



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
        default:
        return state
    }
}

export class UserProvider extends Component {

    state={
        users:[
          {
            id:"unique-1",
            name:"cemil Kaa",
            salary:"4500",
            department:"IT"
          },
          {
            id:"unique-2",
            name:"cemil Kaa",
            salary:"4500",
            department:"IT"
          },
          {
            id:"unique-3",
            name:"cemil Kaa",
            salary:"4500",
            department:"IT"
          },
          {
            id:"unique-4",
            name:"cemil Kaa",
            salary:"4500",
            department:"IT"
          },
        ],
        dispatch : action => {
            this.setState(state=>reducer(state,action))
        }

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

/*
state={
    a:10,
    b:20,
    c:30
}
{
...state // yukaridaki degerleri buraya tasiyorS
}

*/