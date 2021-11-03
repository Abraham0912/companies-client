import React from 'react'
import PolicyForm from '../../forms/PolicyForm'
 
const EditBox= ({props})=> {
    const toggleForms = ()=>{
        if (props.developView === true) {
            return <h1>developView</h1>
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