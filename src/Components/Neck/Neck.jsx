import styles from "./Neck.module.css"

const Neck = ({img}) => {
    return(
            <img className={styles.absulute} src={img} alt="neck"/>
    )
}

export default Neck;