import styles from "./Button.module.css"

export default function Button({onClick, children}) {
    return (
        <button className={styles.wrapper} onClick={onClick}>
            {children}
        </button>
    )
}