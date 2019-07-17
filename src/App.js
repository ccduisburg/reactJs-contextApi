import React,{Component} from 'react'
//import User from './components/User'
import Navbar from './components/Navbar'
import Users from './components/Users'
import './App.css'
import AddUser from './components/AddUser';


class App extends Component {
  //silme fonksiyonunu props olarak child alara aktariyoruz cünkü bütün komponentlerin state lerine ulasmak istiyoruz.
  
  render(){
  return (
    <div className="container">

    <Navbar
    title="User App" />
    <hr/>
    <AddUser/>
    <Users/>
   
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