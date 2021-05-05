import React from 'react'
import './style.css'

const Card = (props) => {
    return (
        <div className='user-card'>
            <img src={props.img} alt="user" className='user-img' />
            <h2 className='user-name'>
                {props.username}
            </h2>
            <a href={props.link} target='_blank' className='user-link'>Ir para o perfil Github</a>
        </div>
    )
}


export default Card