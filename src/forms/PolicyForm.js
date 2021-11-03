import React, { Component } from 'react'
import { SelectForm } from './SelectForm'

export default class PolicyForm extends Component {
    constructor(props){
        super(props)

        this.state={
            conjunto_politicas: "No realizado",
            revision_politica: "No realizado"
        }

        this.handleSelectConjuntoPoliticas = this.handleSelectConjuntoPoliticas.bind(this)
        this.handleSelectRevisionPolitica = this.handleSelectRevisionPolitica.bind(this)
    }

    handleSelectConjuntoPoliticas(event){
        // console.log(event.target.value)
        this.setState({
            conjunto_politicas: event.target.value
        })
    }

    handleSelectRevisionPolitica(event){
        this.setState({
            revision_politica: event.target.value
        })
    }

    render() {
        console.log(this.state)
        return (
        <>
        <h1>{this.state.conjunto_politicas}</h1>
        <SelectForm 
            description="policy_set" 
            value="valor" 
            handleSelect={this.handleSelectConjuntoPoliticas}
        />

        <SelectForm 
            description="policy_review" 
            value="valor" 
            handleSelect={this.handleSelectRevisionPolitica}
        />
        </>
        )
    }
}
