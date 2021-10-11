import React ,{ useEffect, useState } from 'react';
import Container from './components/container'
import Header from './components/header'
import Footer from './components/Footer';

import lincler from './images/Abradolf_Lincler.png'
import beth from './images/Beth.png'
import birdperson from './images/Birdperson.png'
import cromulons from './images/cromulons.png'
import doofy from './images/doofy.png'
import squanchy from './images/squanchy.png'
import morty from './images/morty.png'
import scaryterry from './images/Scary-Terry.png'
import summer from './images/summer.png'
import jerry from './images/Jerry_Smith.png'
import meeseeks from './images/meeseeks.png'
import nimbus from './images/Nimbus.png'
import rick from './images/Rick_Sanchez.png'
import mrpbh from './images/mr_poopybutthole.png'

function App() {
    const [score,setScore] = useState(0)
    const [highscore,setHighscore] = useState(0)

    const cardContent = [
      {
        num:1,
        title: 'Abradolf Lincler',
        description: ' “Prepare to be emancipated from your own inferior genes!” ',
        src: lincler
      },
      {
        num:2,
        title: 'Squanchy',
        description: ' “Rick Sanchez! You psycho bag of squanch!” ',
        src: squanchy
      },
      {
        num:3,
        title: 'Beth Smith',
        description: ' “What? I do. I squanch my family.” ',
        src: beth
      },
      {
        num:4,
        title: 'Jerry Smith',
        description: '"Nobody\'s killing me until after i catch my wife with another man"',
        src: jerry
      },
      {
        num:5,
        title: 'Rick Sanchez',
        description: ' "Wubba lubba dub dub!"',
        src: rick
      },
      {
        num:6,
        title: 'Mr. Poopybutthole',
        description: ' "Oooohwee!" ',
        src: mrpbh
      },
      {
        num:7,
        title: 'Doofus Rick',
        description: ' "Hey! I don\'t eat poop! Y-you guys are always so mean to me!" ',
        src: doofy
      },
      {
        num:8,
        title: 'Mr. Meeseeks',
        description:  '  "I\'m Mr. Meeseeks, look at me!" ',
        src: meeseeks
      },
      {
        num:9,
        title: 'Cromulons',
        description: ' "Show me whatchu got" ',
        src: cromulons
      },
      {
        num:10,
        title: 'Mr. Nimbus',
        description: ' "I am Mr. Nimbus" ',
        src: nimbus
      },
      {
        num:11,
        title: 'Birdperson',
        description: '  “In bird culture, this is considered a dick move.” ',
        src: birdperson
      },
      {
        num:12,
        title: 'Summer Smith',
        description: '"Losers Look Stuff Up While The Rest Of Us Are Carpin\' All Them Diems."',
        src: summer
      },
      {
        num:13,
        title: 'Scary Terry',
        description: ' "You can run but you cannot hide, Bitch! " ',
        src: scaryterry
      },
      {
        num:14,
        title: 'Morty Smith',
        description: ' "You’re like Hitler but even Hitler cared about Germany or something!”',
        src: morty
      },
    ]

    const newScore = () => {
      let tmp = score;
      tmp++;
      setScore(tmp)
    }

    const reset = () => {
      if(score > highscore){
        setHighscore(score)
      }
      setScore(0)
    }

    useEffect(() => {
      if(score=== cardContent.length) {
        alert('You\'re a Genius, You moron! ')
        reset()
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[score])


    return (
      <div>
        <div>
          <Header score={score} highscore={highscore}/>
        </div>
        <Container cardContent={cardContent} score={score} highscore={highscore} handleScore={newScore} reset={reset}/>
        <Footer/>
      </div>
    );
}
  
export default App;