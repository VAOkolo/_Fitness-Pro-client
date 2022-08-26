import React from 'react'

export default function ProfileCard() {

    const [streak, setStreak ] = useState(7)
    const [challengerCount, setChallengerCount] = useState(2)
    const [profileImage, setProfileImage] = useState()
    const [username, setUsername] = useState("user1")

  return (
      <>
    <div className="profile-card">
        <div className="profile-img">
            <img src={profileImage} alt="user image"></img>
        </div>
        <div className="profile-username">
            <p>{username}</p>
        </div>
    </div>
    </>
  )
}
