import styles from "./Leg.module.css"

const Leg = ({img}) => {
    return(
            <img className={styles.absulute} src={img} alt="leg"/>
            )
}

export default Leg;