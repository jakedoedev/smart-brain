import React from 'react';
import ProfileIcon from '../Profile/ProfileIcon';

const Navigation = ({ onRouteChange, isSignedIn, toggleModal, username }) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          {/* <h1 className="pa3">{username}</h1> */}
          <ProfileIcon
            onRouteChange={onRouteChange}
            toggleModal={toggleModal}/>
          {/* <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>
            Sign Out
          </p> */}
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
          <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
        </nav>
      );
    }
}

export default Navigation;
