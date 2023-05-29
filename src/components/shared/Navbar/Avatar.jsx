import React, { useContext } from "react"
import avatar from "../../../assets/images/placeholder.jpg"
import { AuthContext } from "../../../providers/AuthProvider"

const Avatar = () => {
  const { user } = useContext(AuthContext)
  return (
    <div>
      <img
        width={40}
        h={40}
        className="rounded-full"
        src={user && user.photoURL ? user.photoURL : avatar}//user image conditional rendering
        alt="User"
      />
    </div>
  )
}

export default Avatar
