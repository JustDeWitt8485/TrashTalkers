import React, {useContext} from 'react'
import CurrentUser from './CurrentUser'
import UserProfile from './UserProfile'
import { UserContext } from '../providers/UserProvider';

const ProfilePage = () => {
    const user = useContext(UserContext)
    // console.log(user)
  
    return (
        <>
        <CurrentUser {...user} />
        </>
    )
}
export default ProfilePage