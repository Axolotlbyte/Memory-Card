import '../../src/styles/card.css'
import React, { useEffect, useState } from 'react'

const Card = (props) => {
    const [status,setStatus] = useState(false)
    const {handleChange, card,reset,score} = props

    useEffect(() => {
        if(score === 0){
            setStatus(false)
        }
    },[score])

    return (
        <div className='card' onClick={() => {
                if(!status){
                    handleChange()
                    return setStatus(true)
                }
                else{
                    reset()
                }
                }}>
            <div className='char-img'>
                <img src={card.src} ></img>
            </div>
            <p className='title'>{card.title}</p>
            <p className='desc'>{card.description}</p>
        </div>
    )

}

export default Card