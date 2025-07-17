import Button from "../button";
import styles from "./styles.module.css";


export default function Card({posterImg, title}) { // O nome pode ser qualquer um mas "props" é a convenção. Também é comum desestruturar as props, tornando o código mais enxuto.
    return (
        <div className={styles.card}>
            <img src={posterImg} alt={title} />
            <div className={styles.cardContent}>
                <h1>{title}</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi dolores autem enim! Corporis impedit quidem a accusamus repellat velit quibusdam dicta ipsa, atque illum nemo similique deserunt, molestiae doloremque! Magnam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, ipsum temporibus beatae reprehenderit cum officia accusamus maxime voluptatibus excepturi eius ratione, quisquam, porro animi. Dignissimos ullam consequatur eaque minima corrupti!</p> 
            <Button text="Comprar Agora"/>
            </div>
        </div>
    )
}