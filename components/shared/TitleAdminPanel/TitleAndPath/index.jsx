import styles from './styles.module.css';



const TitleAndPath = ({title, path}) => {
    return (
        <>
            <h4>{title}</h4>
            <span className={styles.styledPath}>{path}</span>
        </>
    )
}

export default TitleAndPath;