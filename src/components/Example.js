import React, { Component } from 'react'
import axios from 'axios'

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
        <div key={empresa.id}>
          <p>{empresa.name}</p>
        </div>
      )
    })
  }
  render() {
    return (
      <>
        <h2>Example.js</h2>
        {this.listCompanies()}
      </>
    )
  }
}
