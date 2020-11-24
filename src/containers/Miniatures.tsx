import Miniature from '../components/Miniature'
import style from '../styles/Miniatures.module.css'
const Miniatures = ({radios, state}) => {
    return <section className={style.miniatures}>
      <div className={style.slider}>
        {
          radios.map(radio => {
            return <Miniature radio={radio} state={state} />             
          })
        }
      </div>
    </section>
}
export default Miniatures