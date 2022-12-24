import styles from "./Ears.module.css"

const Ears = ({img}) => {
    return(
            <img className={styles.absulute} src={img} alt="ears"/>
            )
}

export default Ears;