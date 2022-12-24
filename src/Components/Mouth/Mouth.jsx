import styles from "./Mouth.module.css"

const Mouth = ({img}) => {
    return (
            <img className={styles.absulute} src={img} alt="mouth"/>
            )
}

export default Mouth;