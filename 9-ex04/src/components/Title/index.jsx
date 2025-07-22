import styles from './Title.module.css'

export default function Title(props) {
    return (
        <h1 {...props} className={`${styles.wrapper}`}>
            {props.children}
        </h1>
    )
}