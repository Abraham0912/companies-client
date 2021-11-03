import React, { Component } from 'react'
import { SelectForm } from './SelectForm'

export default class DevelopForm extends Component {
    constructor(props){
        super(props)

        this.state={
            policy: "politica",
            environment: "entorno",
            functionality: "funcionalidad",
            acceptance: "aceptado"
        }

        this.handleSelectPolicy = this.handleSelectPolicy.bind(this)
        this.handleSelectEnvironment = this.handleSelectEnvironment.bind(this)
        this.handleSelectFunctionality = this.handleSelectFunctionality.bind(this)
        this.handleSelectAcceptance = this.handleSelectAcceptance.bind(this)
    }

    handleSelectPolicy(event){
        // console.log(event.target.value)
        this.setState({
            policy: event.target.value
        })
    }

    handleSelectEnvironment(event){
        this.setState({
            environment: event.target.value
        })
    }

    handleSelectFunctionality(event){
        this.setState({
            functionality: event.target.value
        })
    }

    handleSelectAcceptance(event){
        this.setState({
            acceptance: event.target.value
        })
    }

    render() {
        console.log(this.state)
        return (
        <>
        <h1>{this.state.conjunto_politicas}</h1>
        <SelectForm 
            description="policy" 
            value="valor" 
            handleSelect={this.handleSelectPolicy}
        />

        <SelectForm 
            description="environment" 
            value="valor" 
            handleSelect={this.handleSelectEnvironment}
        />

        <SelectForm 
            description="functionality" 
            value="valor" 
            handleSelect={this.handleSelectFunctionality}
        />

        <SelectForm 
            description="acceptance" 
            value="valor" 
            handleSelect={this.handleSelectAcceptance}
        />
        </>
        )
    }
}
