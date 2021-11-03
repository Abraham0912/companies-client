import React, { Component } from 'react'
import { SelectForm } from './SelectForm'

export default class TeleForm extends Component {
    constructor(props){
        super(props)

        this.state={
            network_controls: "controles de red",
            security_mechanisms: "mecanismos de seguridad",
            segregation_networks: "segregacion de red",
            procedures: "procedimientos",
            exchange: "intercambio",
            mesage_service: "mensajeria",
            confidentiality: "confidencialidad"
        }

        this.handleSelectNetworkControls = this.handleSelectNetworkControls.bind(this)
        this.handleSelectSecurityMechanisms = this.handleSelectSecurityMechanisms.bind(this)
        this.handleSelectSegregationNetworks = this.handleSelectSegregationNetworks.bind(this)
        this.handleSelectProcedures = this.handleSelectProcedures.bind(this)
        this.handleSelectExchange = this.handleSelectExchange.bind(this)
        this.handleSelectMesageService = this.handleSelectMesageService.bind(this)
        this.handleSelectConfidentiality = this.handleSelectConfidentiality.bind(this)
    }

    handleSelectNetworkControls(event){
        // console.log(event.target.value)
        this.setState({
            network_controls: event.target.value
        })
    }

    handleSelectSecurityMechanisms(event){
        this.setState({
            security_mechanisms: event.target.value
        })
    }

    handleSelectSegregationNetworks(event){
        this.setState({
            segregation_networks: event.target.value
        })
    }

    handleSelectProcedures(event){
        this.setState({
            procedures: event.target.value
        })
    }

    handleSelectExchange(event){
        this.setState({
            exchange: event.target.value
        })
    }

    handleSelectMesageService(event){
        this.setState({
            mesage_service: event.target.value
        })
    }

    handleSelectConfidentiality(event){
        this.setState({
            confidentiality: event.target.value
        })
    }

    render() {
        console.log(this.state)
        return (
        <>
        <h1>{this.state.network_controls}</h1>
        <SelectForm 
            description="Controladores de red" 
            value="valor" 
            handleSelect={this.handleSelectNetworkControls}
        />

        <SelectForm 
            description="Mecanismos de seguridad" 
            value="valor" 
            handleSelect={this.handleSelectSecurityMechanisms}
        />

        <SelectForm 
            description="Segregacion de red" 
            value="valor" 
            handleSelect={this.handleSelectSegregationNetworks}
        />

        <SelectForm 
            description="Procedimeintos" 
            value="valor" 
            handleSelect={this.handleSelectProcedures}
        />

        <SelectForm 
            description="Intercambio" 
            value="valor" 
            handleSelect={this.handleSelectExchange}
        />

        <SelectForm 
            description="Mensajeria" 
            value="valor" 
            handleSelect={this.handleSelectMesageService}
        />

        <SelectForm 
            description="Confidencialidad" 
            value="valor" 
            handleSelect={this.handleSelectConfidentiality}
        />
        </>
        )
    }
}
