import { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../store/slices/user-slice/user.selector";
import { ProfileContainer } from "./profile.style";
import { HeadingMain, HeadingSecondary, HeadingTerciary, MainContentContainer, ProfileImage, InputGroupColumn, HeadingContainer } from "../../universal-styles";
import CustomInput from "../../custom-input/custom-input.component";
import { CustomButton, CUSTOM_BUTTON_TYPE_CLASSES } from "../../custom-button/custom-button.component";
import { SidebarModal, SidebarModalShadow } from "../../sidebar/sidebar.style";
import { Trash2, X, Menu, ChevronLeft } from "react-feather";
import { deleteImage, deleteWholeUser, updateProfileImage, uploadImage } from "../../../utils/firebase/firebase.utils";
import { ArrowLink, ARROW_LINK_TYPE_CLASSES } from "../../arrow-link/arrow-link.component";

import SidebarMain from "../../sidebar/sidebar.component";

const sidebarsInitialState = {
  sidebar1: false,
  sidebarMain: false,
};

const ProfilePage = () => {
  const { id, profileImage = {} } = useSelector(selectCurrentUser);
  const [file, setFile] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(sidebarsInitialState);

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

  const toggleSidebar = (e) => {
    const name = e.currentTarget.getAttribute("name");
    if (name) {
      return setSidebarOpen({
        ...sidebarOpen,
        [name]: !sidebarOpen[name],
      });
    }

    return setSidebarOpen(sidebarsInitialState);
  };

  const handleDelete = async () => await deleteWholeUser(id, profileImage.fullPath);

  return (
    <Fragment>
      <SidebarModalShadow isOpen={sidebarOpen.sidebar1 || sidebarOpen.sidebarMain} onClick={toggleSidebar} />
      <SidebarModal isOpen={sidebarOpen.sidebar1}>
        <X onClick={toggleSidebar} name="sidebar1" />

        <HeadingSecondary>Delete account</HeadingSecondary>

        <InputGroupColumn>
          <p className="modal-form-text">Be careful this step is irreversible!</p>

          <CustomButton onClick={handleDelete} buttonType={CUSTOM_BUTTON_TYPE_CLASSES.red}>
            Delete account
            <Trash2 />
          </CustomButton>
        </InputGroupColumn>
      </SidebarModal>

      <SidebarMain navModal toggleMethod={toggleSidebar} isOpen={sidebarOpen.sidebarMain} />

      <MainContentContainer>
        <ProfileContainer>
          <ArrowLink to={`/projects`} linkType={ARROW_LINK_TYPE_CLASSES.arrowLeft}>
            <ChevronLeft />
            Go back
          </ArrowLink>
          <HeadingContainer>
            <HeadingMain>My profile</HeadingMain>

            <div className="project-action-box">
              <CustomButton id="menu-btn" onClick={toggleSidebar} name="sidebarMain">
                Menu
                <Menu />
              </CustomButton>
            </div>
          </HeadingContainer>

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
            <CustomButton buttonType={CUSTOM_BUTTON_TYPE_CLASSES.red} name="sidebar1" onClick={toggleSidebar}>
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
