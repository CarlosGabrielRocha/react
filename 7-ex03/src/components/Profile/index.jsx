import UrlButton from '../UrlButton';
import styles from './styles.module.css';

function Profile({ avatar, name, bio, email, phone, githubUrl, linkedinUrl, twitterUrl }) {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.profilePicture}>
                <img src={avatar} alt={name} />
            </div>
            <h1>{name}</h1>
            <div className={styles.info}>
                <hr />
                <p>{bio}</p>
                <hr />
                <span>{phone}</span>
                <hr />
                <p>{email}</p>
                <hr />
            </div>
            <div className={styles.buttons}>
                <UrlButton text="GitHub" url={githubUrl} />
                <UrlButton text="Linkedin" url={linkedinUrl} />
                <UrlButton text="Twitter" url={twitterUrl} />
            </div>
        </div>
    )
}

export default Profile