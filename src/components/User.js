import React,{Component} from 'react'
import  PropTypes from 'prop-types'
import UserConsumer from "../context";


class User extends Component {
    state={
        isVisible:false
    }
     static defaultProps={
        name:" kein inf",
        salary: " kein inf",
        department: " kein inf"
    
    }
 
    onClickEvent=(number,e) => {
    this.setState({
        isVisible:!this.state.isVisible
    })
    }
//arrow function otomatik olarak bind islemini yapiyor.
    onDeleteUser=(dispatch,e)=>{
      const {id,deleteUser}=this.props;
      dispatch({type:"DELETE_USER",payload:id})
      //Consumer Dispatch
    }
//kendi yazdigimiz metodlarda this i bind etmemiz gerekiyor. aksi halde undefined oluyor.
//fakat componentle gelen metodlarda miras aldigi kilasi temsil ediyor
//onclick={this.onClickEvent.bind(this,34)} event le deger gönderebiliriz. bunun icin bind(this,) ilk parametre this olmak zorunda
//event te kendi verdiigimiz deger parametresi ilk olarak veriyoruz onClickEvent(number,e)
    render() {
        const {name,department,salary}=this.props;
        const {isVisible}=this.state;
        return (
            <UserConsumer>
                {
                    value=>{
                        const {dispatch}=value;
                         return (
                                    <div className="col-md-8 mb-4" >
                                    <div className="card" style={isVisible?{backgroundColor:"#62848d", color:"white"}:null}>
                                    <div className ="card-header.d-flex.justify-content-between">
                                    <h4 className="d-inline"onClick={this.onClickEvent}>{ name }</h4>
                                    <i onClick={this.onDeleteUser.bind(this,dispatch)} className="far fa-trash-alt" style={{cursor:"pointer"}}></i>

                                     </div>
                                    { isVisible ? <div className="card-body">
                                     <p div className="card-text">Maas :{salary}</p>
                                     <p div className="card-text">Department :{department}</p>        
                                     </div>:null
                                    }
                                     </div>
                                    </div>             
                                
                                )
                    }
                }
            </UserConsumer>
            
               )
       
    }
}

    User.propTypes={
        name: PropTypes.string.isRequired,
        salary: PropTypes.string.isRequired,
        department: PropTypes.string.isRequired,
        id:PropTypes.string.isRequired

    }

export default User;
