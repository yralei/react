import React from 'react';
import moment from 'moment';
const formatDate = (date) => moment(date).format('DD MMM YY');
const Profile = (props) => {
  const dateOfBirth = props.userData.birthDate;
  return (
    <div className="profile">
      <div className="profile__name">{`${props.userData.firstName} ${props.userData.lastName}`}</div>
      <div className="profile__birth">{`Was born ${formatDate(
        dateOfBirth
      )} in ${props.userData.birthPlace}`}</div>
    </div>
  );
};

export default Profile;
