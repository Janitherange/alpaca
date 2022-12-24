import styles from "./Hair.module.css"

const Hair = ({img}) => {
    return (
            <img className={styles.absulute} src={img} alt="hair"/>
            )
}

export default Hair;