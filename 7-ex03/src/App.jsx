import Profile from "./components/Profile";
import profilePicture from "./assets/profile-picture.jpg"
export default function App() {

  return (
    <>
      <Profile 
        avatar={profilePicture}
        name="Erika da Silva"
        bio="Full-stack javaScript developer at ACme inc."
        phone="+5511987654321"
        email="erika.silva@gmail.com"
        githubUrl="https://github.com"
        linkedinUrl="https://linkedin.com"
        twitterUrl="https://twitter.com"
      />
    </>
  )
}


