import { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../store/slices/user-slice/user.selector";
import { ProfileContainer } from "./profile.style";
import { HeadingMain, HeadingSecondary, HeadingTerciary, MainContentContainer, ProfileImage, InputGroupColumn } from "../../universal-styles";
import CustomInput from "../../custom-input/custom-input.component";
import { CustomButton, CUSTOM_BUTTON_TYPE_CLASSES } from "../../custom-button/custom-button.component";
import { SidebarModal, SidebarModalShadow } from "../../sidebar/sidebar.style";
import { Trash2, X } from "react-feather";

import { deleteImage, deleteWholeUser, updateProfileImage, uploadImage } from "../../../utils/firebase/firebase.utils";
const ProfilePage = () => {
  const { id, profileImage = {} } = useSelector(selectCurrentUser);
  const [file, setFile] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleChange = (e) => {
    const file = e.target.files[0];
    const fileSize = (file.size / 1024 / 1024).toFixed(2);

    if (fileSize > 5) {
      setFile("");
    } else {
      setFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (profileImage.default) {
      const { downloadURL, fullPath } = await uploadImage(id, file);
      await updateProfileImage(id, downloadURL, fullPath, false);
      setFile("");
    } else {
      const { downloadURL, fullPath } = await uploadImage(id, file);
      await updateProfileImage(id, downloadURL, fullPath, false);
      await deleteImage(profileImage.fullPath);
      setFile("");
    }
  };

  const handleResetProfileImage = async () => {
    await updateProfileImage(
      id,
      " https://firebasestorage.googleapis.com/v0/b/bugtracker-3e884.appspot.com/o/defaultProfileImg%2FbasicProfile.svg?alt=media&token=85a00853-81dd-471f-ba32-155360d963e7",
      "defaultProfileImg/basicProfile.svg",
      true
    );
    await deleteImage(profileImage.fullPath);
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleDelete = async () => await deleteWholeUser(id, profileImage.fullPath);

  return (
    <Fragment>
      <SidebarModalShadow isOpen={sidebarOpen} onClick={toggleSidebar} />
      <SidebarModal isOpen={sidebarOpen}>
        <X onClick={toggleSidebar} name="sidebar" />

        <HeadingSecondary>Delete project</HeadingSecondary>

        <InputGroupColumn>
          <p className="modal-form-text">Be careful this step is irreversible!</p>

          <CustomButton onClick={handleDelete} buttonType={CUSTOM_BUTTON_TYPE_CLASSES.red}>
            Delete project
            <Trash2 />
          </CustomButton>
        </InputGroupColumn>
      </SidebarModal>

      <MainContentContainer>
        <ProfileContainer>
          <HeadingMain>My profile</HeadingMain>

          <HeadingSecondary>Manage profile</HeadingSecondary>

          <div className="profile-img-box">
            <ProfileImage imgSrc={profileImage.imgURL} />

            <form onSubmit={handleSubmit}>
              <HeadingTerciary>Max file size is 5MB</HeadingTerciary>
              <CustomInput required type="file" accept="image/jpeg, image/png" onChange={handleChange} />
              <div className="button-group">
                <CustomButton type="button" onClick={handleResetProfileImage}>
                  Reset
                </CustomButton>
                <CustomButton type="submit">Submit</CustomButton>
              </div>
            </form>
          </div>

          <HeadingSecondary>Delete account</HeadingSecondary>

          <div className="profile-delete-box">
            <p>Be careful this step is irreversible!</p>
            <CustomButton buttonType={CUSTOM_BUTTON_TYPE_CLASSES.red} onClick={toggleSidebar}>
              Delete account
              <Trash2 />
            </CustomButton>
          </div>
        </ProfileContainer>
      </MainContentContainer>
    </Fragment>
  );
};

export default ProfilePage;
