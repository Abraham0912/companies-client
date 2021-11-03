import React, { Component } from 'react'
import '../assets/styles/ViewStyles.sass'
import EditBox from '../components/edit/EditBox'
import { FeatureList } from '../components/edit/FeatureList'

export default class Edit extends Component {
    constructor(props){
        super(props)

        this.state={
            policyView:false,
            teleView: false,
            developView: false
        }
    }

    toggleView(currentKey){
        Object.keys(this.state).forEach(key => {
            this.setState({
                [key]: false
            });
        });
        this.setState({
            [currentKey]: !this.state[currentKey]
        })
    }
  render() {
  console.log(this.state)
    return (
      <>
        <div className="content">
            <div className="feature-section">
                <FeatureList handleClick={this.toggleView.bind(this)}/>
                <EditBox/>
            </div>
        </div>
      </>
    )
  }
}
