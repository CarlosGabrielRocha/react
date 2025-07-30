import styles from "./Grouper.module.css";

export default function Grouper({ items, removeFunction }) {
    return (
        <div className={styles.wrapper}>
            {items.map(item => (
                <div key={item.id} className={styles.commentContainer}>
                    <div className={styles.commentHeader}>
                    <p>{item.email}</p>
                    <a 
                    type="button"
                    onClick={() => removeFunction(item.id)}>
                        remover
                    </a>
                    </div>
                    <span>Em {item.commentDate}</span>
                    <div className={styles.commentBody}>
                    <p>{item.comment}</p>
                    </div>
                </div>
            )
            )}
        </div>
    )
}