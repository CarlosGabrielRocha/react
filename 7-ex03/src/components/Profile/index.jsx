import { useState } from 'react';
import Title from '../Title';
import UrlButton from '../UrlButton';
import ProfileSection from './ProfileSection';
import styles from './styles.module.css';



function Profile({ avatar, name, bio, email, phone, githubUrl, linkedinUrl, twitterUrl }) {
    // [valor, funcaoModificadora]
    const [followText, setFollowText] = useState("Follow")   
    //let followButtonText = "follow"

    function handleClick(ev) {
        alert('Você agora está seguindo!')
        setFollowText("Following")
    }

    return (
        <div className={styles.profileContainer}>
            <div className={styles.profilePicture}>
                <img src={avatar} alt={name} />
            </div>
            <Title>
                <span>{name}</span>
                <button
                    className={styles.followButton}
                    onClick={handleClick}>
                    {followText}
                </button>
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