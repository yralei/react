import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

const User = ({ match }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${match.params.userId}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error();
      })
      .then(userData => {
        setUserData(userData);
      });
  }, [match.params.userId]);

  if (!userData) {
    return null;
  }

  const { name, location, avatar_url } = userData;
  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

// class User extends Component {
//   state = {
//     userData: null,
//   };

//   componentDidMount() {
//     this.fetchUserData();
//   }

//   componentDidUpdate(pervProps) {
//     const pervUser = pervProps.match.params.userId;
//     const currentUser = this.props.match.params.userId;
//     if (pervUser !== currentUser) {
//       this.fetchUserData();
//     }
//   }

//   fetchUserData() {
//     const { match } = this.props;
//     fetch(`https://api.github.com/users/${match.params.userId}`)
//       .then(res => {
//         if (res.ok) {
//           return res.json();
//         }
//         throw new Error();
//       })
//       .then(userData => {
//         this.setState({
//           userData,
//         });
//       });
//   }

//   render() {
//     const { userData } = this.state;
//     if (!userData) {
//       return null;
//     }
//     const { name, location, avatar_url } = userData;
//     return (
//       <div className="user">
//         <img alt="User Avatar" src={avatar_url} className="user__avatar" />
//         <div className="user__info">
//           <span className="user__name">{name}</span>
//           <span className="user__location">{location}</span>
//         </div>
//       </div>
//     );
//   }
// }

export default User;
