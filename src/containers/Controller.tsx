import style from '../styles/Controller.module.css'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

const Controller = ({state, radios}) => {
    return <section className={style.controller}>
        <p>Agora na rádio {state.activeRadio.name}</p>
        <h2>{state.activeRadio.tracks[0].name}</h2>
        <h3>{state.activeRadio.tracks[0].artist}</h3>
        <div className={style.controller__arrows}>
        <MdKeyboardArrowLeft 
            onClick={() => moveElement(
                radios.findIndex(radio => radio._id === state.activeRadio._id), 
                'backward',
                radios,
                state.setActiveRadio
            )}
            className={style.arrow} 
            size="100"/>
        <MdKeyboardArrowRight 
            onClick={() => moveElement(
            radios.findIndex(radio => radio._id === state.activeRadio._id), 
            'forward',
            radios,
            state.setActiveRadio
            )}
            className={style.arrow} 
            size="100"/>
        </div>
    </section>
}
export default Controller

function moveElement(actualElement, direction, listOfElements, action){
    const lastElement = listOfElements.length - 1
    if(direction === 'backward'){
      if(actualElement === 0){
        action(listOfElements[lastElement])
        return
      }
      return action(listOfElements[actualElement - 1])
    }
    if(direction === 'forward'){
      if(actualElement === lastElement){
        action(listOfElements[0])
        return
      }
      return action(listOfElements[actualElement + 1])
    }
  }