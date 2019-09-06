import React from 'react'

export const Card = ({title, children}) => (
    <div className="slide-container">
        <h3 className="slide-title">{title}</h3>
        <div className="slide-card">
            {children}
        </div>
    </div>
)

