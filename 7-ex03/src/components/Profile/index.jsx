import Title from '../Title';
import UrlButton from '../UrlButton';
import ProfileSection from './ProfileSection';
import styles from './styles.module.css';

function Profile({ avatar, name, bio, email, phone, githubUrl, linkedinUrl, twitterUrl }) {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.profilePicture}>
                <img src={avatar} alt={name} />
            </div>
            <Title>
                <span>{name}</span>
                <button>Follow</button>
            </Title>
            <ProfileSection
                className={styles.blue}
                id="profile-section"
                data-test="some value"
                aria-label="some value"
            >
                <hr />
                <p>{bio}</p>
                <hr />
                <span>{phone}</span>
                <hr />
                <p>{email}</p>
                <hr />
            </ProfileSection>
            <div className={styles.buttons}>
                <UrlButton url={githubUrl}>Github</UrlButton>
                <UrlButton url={linkedinUrl}>Linkedin</UrlButton>
                <UrlButton url={twitterUrl}>Twitter</UrlButton>
            </div>
        </div>
    )
}

export default Profile