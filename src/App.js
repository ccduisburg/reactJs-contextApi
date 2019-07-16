import React,{Component} from 'react'
import User from './components/User'
import Navbar from './components/Navbar'
import Users from './components/Users'
import './App.css'

class App extends Component {
  //silme fonksiyonunu props olarak child alara aktariyoruz cünkü bütün komponentlerin state lerine ulasmak istiyoruz.
  deleteUser = (id) => {//ya bind etmemiz gerekiyor yada arrow function olarak yazilmasi gerekiyor.
   this.setState({
     users:this.state.users.filter(user => id !== user.id)
   })
  }
  render(){
  return (
    <div className="container">
    <Navbar
    title="User App" />
    <hr/>
    <Users deleteUser={this.deleteUser} users={this.state.users}/>
    </div>
  );
}
}
export default App;
/*
iki türlü state var. 
 1,sadece kendi state
 2, her component tarafindan kullanilan state ler. (ortak)
proplar yardimiyla state leri aktariyoruz.
büyük projelerde context API ile yapiliyor.
veya Redux ile gelistirmek gerekiyor.
Redux ile yapilana provider deniliyor. data saglayici.
providerin sagladigi datalari her komponentte kullanabiliriz.
*/