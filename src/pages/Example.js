import React, { Component } from 'react'
import axios from 'axios'
import '../assets/styles/HomeStyles.sass'

export default class Example extends Component {
  constructor(props){
    super(props)
    
    this.state={
      empresas:[]
    };
  }
  componentDidMount(){
    axios.get('http://localhost:3002/api/v1/companies')
    .then(response=>{
      console.log(response.data)
      this.setState({
        empresas: response.data
      })
    })
  }

  listCompanies(){
    return this.state.empresas.map((empresa)=>{
      return(
        <div key={empresa.id} className="itemList-item">
          <h1>{empresa.name}</h1>
          <p>{empresa.description}</p>
        </div>
      )
    })
  }
  render() {
    return (
      <>
      <div className="App">
        <div className="iteList">
          {this.listCompanies()}
        </div>
      </div>
        
      </>
    )
  }
}
