import React from 'react'
import '../../assets/styles/ViewStyles.sass'

const FeatureItem = ({text, ImgComponent, handleClick})=>{
    return(
        <>
        <div className="feature-item" onClick={handleClick}>
            <ImgComponent className="feature-item-img"/>
            <div className="feature-item-text">Modulo: {text}</div>
        </div>
        </>
    )
     
}

export default FeatureItem;