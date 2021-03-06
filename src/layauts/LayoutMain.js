import React from 'react'
import '../assets/styles/LayoutStyles.sass'

export const LayoutMain = ({children}) => {
    return (
        <div>
            <header>
                <div className="content">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/example">Companies</a></li>
                        <li><a href="/empresas/25/edit">EditCompany</a></li>
                    </ul>
                </div>
            </header>
            {children}
        </div>
    )
}
