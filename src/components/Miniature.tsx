import style from '../styles/Miniatures.module.css'
const Miniature = ({radio, state}) => {
    return <article 
        key={radio._id}
        className={`${style.miniature} ${state.activeRadio._id === radio._id ? style.miniature_active : ''}`} 
        style={{backgroundImage:`url(${radio.cover})`}}
        onClick={() => state.setActiveRadio(radio) }>
        <h3 className={style.miniature__name}>{radio.name}</h3>
    </article> 
}
export default Miniature