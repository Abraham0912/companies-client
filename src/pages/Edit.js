import React, { Component } from 'react'
import '../assets/styles/ViewStyles.sass'
import { FeatureList } from '../components/edit/FeatureList'

export default class Edit extends Component {
    constructor(props){
        super(props)

        this.state={
            policyView:false,
            teleView: false,
            developView: false,
            // counter: 0
        }
        // this.incrementar=this.incrementar.bind(this)
    }

    toggleView(currentKey){
        console.log("hola soy toggleView :D")
        Object.keys(this.state).forEach(key => {
            this.setState({
                [key]: false
            });
        });
        this.setState({
            [currentKey]: !this.state[currentKey]
        })
    }

    // incrementar(){
    //     this.setState({
    //         counter:this.state.counter + 1
    //     })
    // }
  render() {
  console.log(this.state)
    return (
      <>
      {/* <button onClick={this.incrementar}>Incrementar</button>
      <h2>Contador= {this.state.counter}</h2> */}
        <div className="content">
            <div className="feature-section">
                <FeatureList handleClick={this.toggleView.bind(this)}/>
                <h1>pages/Edit.js</h1>
            </div>
        </div>
      </>
    )
  }
}
