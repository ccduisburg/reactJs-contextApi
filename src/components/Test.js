import React, { Component } from 'react'

class Test extends Component {
    constructor(props){
    super(props);//süper e props vermezsek this kullanamayiz
    this.state={
        a:10
    }
    console.log("constructor")
    }
    componentDidMount() {// APi isteklerini burda yapiyoruz. state güncellemek icin
        this.setState({
            a:20
        })
      console.log("componentz did mount");
    }
    componentDidUpdate=(prevProps,prevState)=>{
        console.log("component did update")
    }
    shouldComponentUpdate() {
        console.log("Should")
      return false;
    }
    
    
  render() {
      console.log("render");
    return (
      <div>
        
      </div>
    )
  }
}
export default Test;

//render in icerisinde setState kullanirsak sonsuz föngüye giriyor.
