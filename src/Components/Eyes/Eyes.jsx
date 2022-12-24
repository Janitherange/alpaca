import styles from "./Eyes.module.css"

const Eyes = ({img}) => {
    return (
            <img className={styles.absulute} src={img} alt="eyes"/>
            )
}

export default Eyes;