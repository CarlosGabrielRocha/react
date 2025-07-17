import styles from "./styles.module.css";

export default function UrlButton(props) {
    return (
        <a 
           className={styles.urlButton}
           href={props.url}
           target="_blank"
        >
           {props.children}
        </a>
    )
}

