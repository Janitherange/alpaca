import styles from "./Accessories.module.css"

const Accessories = ({img}) => {
    return (
        <img className={styles.absulute} src={img} alt="accssories"/>
    )
}

export default Accessories;