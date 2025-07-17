import styles from "./styles.module.css";

export default function Button({text, url}) {
    return (
        <a className={styles.urlButton} href={url}>{text}</a>
    )
}