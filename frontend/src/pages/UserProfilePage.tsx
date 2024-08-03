import { useGetMyUser, useUpdateUser } from "@/api/MyUserApi";
import UserProfileForm from "@/components/forms/user-profile-form/UserProfileForm"

const UserProfilePage = () => {
    const {currentUser, isLoading: isGetLoading} = useGetMyUser();
    const {updateUser, isLoading: isUpdateLoading} = useUpdateUser();


    if(isGetLoading) {
        return <span>Loading...</span>
    }

    if(!currentUser) {
        return <span>Unable to load your Profile</span>
    }
  return (
    <UserProfileForm currentUser={currentUser}  onSave={updateUser} isLoading={isUpdateLoading}/>
  ) 
}

export default UserProfilePage