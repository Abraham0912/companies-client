import React from 'react'
import {ReactComponent as PolicyImg} from '../../assets/images/img1.svg'
import {ReactComponent as TeleImg} from '../../assets/images/img2.svg'
import {ReactComponent as DevelopImg} from '../../assets/images/img3.svg'
import '../../assets/styles/ViewStyles.sass'
import FeatureItem from './FeatureItem'

export const FeatureList = ({handleClick}) => {
    return (
            <div className="feature-list">
                <FeatureItem text="Politicas" ImgComponent={PolicyImg} handleClick={handleClick.bind(this,"policyView")}/>
                <FeatureItem text="Telecomunicaión y seguridad" ImgComponent={TeleImg} handleClick={handleClick.bind(this,"teleView")}/>
                <FeatureItem text="acquisition, desarrollo y mantenimiento" ImgComponent={DevelopImg} handleClick={handleClick.bind(this,"developView")}/>
            </div>
    )
}
