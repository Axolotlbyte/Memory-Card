import React ,{ useEffect, useState } from 'react';
import Card from './card'
import '../../src/styles/container.css'

function Container(props) {

    const {score,highscore, handleScore, reset, cardContent} = props

    
    const [cards,setCards] = useState(cardContent)

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let randomIdx = Math.floor(Math.random() * i);
        [array[randomIdx], array[i]] = [array[i], array[randomIdx]];
      }
    }

    useEffect(() => {
      const temp = [...cards];
      shuffle(temp)
      setCards(temp)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [score,highscore])

    return (
      <div className='container'>
        {cards.map((card) => (
          <Card card={card} score={score} handleChange={handleScore} reset={reset} key={card.num} />
        ))}
      </div>
    );
}
  
export default Container;