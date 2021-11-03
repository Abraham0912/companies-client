import React from 'react'

export const SelectForm = ({description, value,handleSelect}) => {
    return (
            <div className="item-info">
            <p>{description}</p>
            <select defaultValue={value} onChange={handleSelect}>
                <option value="No realizado">No realizado</option>
                <option value="Realizado informalmente">Realizado informalmente</option>
                <option value="Plaificado">Plaificado</option>
                <option value="Bien definido">Bien definido</option>
                <option value="Cuantitativamente controlado">Cuantitativamente controlado</option>
                <option value="Mejora continua">Mejora continua</option>
            </select>
            </div>
    )
}
