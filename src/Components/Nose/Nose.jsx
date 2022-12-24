import styles from "./Nose.module.css"
import nose from "../../assets/nose.png"

const Nose = () => {
    return(
            <img className={styles.absulute} src={nose} alt="nose"/>
            )
}

export default Nose;