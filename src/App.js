import React,{Component} from 'react'
import User from './components/User'
import Navbar from './layout/Navbar'
import Users from './components/Users'
import './App.css'
import AddUser from './forms/AddUser';
import UpdateUser from './forms/UpdateUser';
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom"
import NotFound from './pages/NotFound'
import Contribute from './pages/Contribute'

const Home=()=>{
  return(
    <h3>
      Home Page
    </h3>
  )
}
const About=()=>{
  return(
    <h3>
      About Page
    </h3>
  )
}
class App extends Component {
  //silme fonksiyonunu props olarak child alara aktariyoruz cünkü bütün komponentlerin state lerine ulasmak istiyoruz.
  /*
   <Navbar
    title="User App" />
    <hr/>
    <AddUser/>
    <Users/>
    //---------------------------------------
   <Route exact path="/" component={Home}/>

        <Route exact path="/about" component={About}/> */
  render(){
  return (
    <Router>
      <div className="container">    
        <Navbar title="User App" />
          <hr/>
         
         <Switch>
          <Route exact path="/" component={Users}/>     
          <Route exact path="/add" component={AddUser}/>   
          <Route exact path="/edit/:id" component={UpdateUser}/>   
          <Route exact path="/github" component={Contribute}/>   
          <Route component={NotFound}/>    
         </Switch>       
          
        </div>

    </Router>
   
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