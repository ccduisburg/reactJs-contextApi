//iki yapi kullanacagiz
//1.provider 2. consumer provider tarafindan gönderilen datalari kullanmak icin--saglayici ve tüketici
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const UserContext=React.createContext();

//provider,consumer

class UserProvider extends Component {
    state={
        users:[
          {
            id:1,
            name:"cemil Kaa",
            salary:"4500",
            department:"IT"
          },
          {
            id:2,
            name:"cemil Kaa",
            salary:"4500",
            department:"IT"
          },
          {
            id:3,
            name:"cemil Kaa",
            salary:"4500",
            department:"IT"
          },
          {
            id:4,
            name:"cemil Kaa",
            salary:"4500",
            department:"IT"
          },
        ]
      }
  render() {
    return (
     <UserContext.Provider value={this.state}>
         {this.props.children}
     </UserContext.Provider>
    )
  }
}
const UserConsumer=UserContext.Consumer;
export default UserConsumer;

