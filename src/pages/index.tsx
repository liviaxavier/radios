import React, { useState } from 'react'
import Miniatures from '../containers/Miniatures'
import Controller from '../containers/Controller'
import radios from '../data/radios.js'
import style from '../styles/Home.module.css'

function HomePage() {
  const [activeRadio, setActiveRadio] = useState(radios[0])
    return <main 
      className={style.home} 
      style={{
        backgroundImage: `url(${activeRadio.cover})`
      }}
    >
      <style jsx global>{`
        body {
          margin:0;
          padding:0;
          font-family: Red Hat Display;
        }
        input, button, textarea{
          font-family: Red Hat Display;
        }
    `}</style>
    <Controller 
      radios={radios}
      state={{setActiveRadio, activeRadio}}
    />
    <Miniatures 
      radios={radios}
      state={{setActiveRadio, activeRadio}}
    />
    </main>

  }
  
export default HomePage