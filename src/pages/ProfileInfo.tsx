import React from 'react';
import styled from "styled-components";

const ProfileInfo = styled.div`
  margin-top: 15px;
  width: 100%;
  height: 200px;
  backdrop-filter: brightness(75%);
  border-radius: 25px;
  display: grid;
  grid-template-columns: 25% 60% 1fr;
`

const UserAvatarBlock = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;

  & img {
    max-width: 100%;
    height: 175px;
    border-radius: 100px;
  }
`

const ProfileDetailsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const ProfileDetails = styled.div`
  font-size: 36px;
`

const EditProfileButton = styled.button`
  border-radius: 15px;
  width: 200px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  backdrop-filter: brightness(75%);
  border: none;
`
const ProfileInfoBlock = () => {
    return (
        <ProfileInfo>
            <UserAvatarBlock>
                <img
                    src={'https://www.kindpng.com/picc/m/78-785975_icon-profile-bio-avatar-person-symbol-chat-icon.png'}/>
            </UserAvatarBlock>
            <ProfileDetailsBlock>
                <ProfileDetails>Вадим</ProfileDetails>
                <ProfileDetails>vadim.sardarov@yandex.ru</ProfileDetails>
                <ProfileDetails>32 года</ProfileDetails>
                <EditProfileButton>
                    Изменить данные
                </EditProfileButton>
            </ProfileDetailsBlock>

        </ProfileInfo>
    );
};

export default ProfileInfoBlock;