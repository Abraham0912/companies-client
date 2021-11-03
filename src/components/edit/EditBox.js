import React from 'react'
import PolicyForm from '../../forms/PolicyForm'
import TeleForm from '../../forms/TeleForm'
import DevelopForm from '../../forms/DevelopForm'
 
const EditBox= ({props})=> {
    const toggleForms = ()=>{
        if (props.developView === true) {
            return <DevelopForm/>
        } else if(props.policyView === true){
            return <PolicyForm/>
        }else if(props.teleView === true){
            return <TeleForm/>
        }else{
            return <h1>Ninguno en true</h1>
        }
    }
    return (
      <>
        <div className="feature-banner">
            <div className="feature-banner-box">
                {toggleForms()}
            </div>
        </div>
      </>
    )
}

export default EditBox;