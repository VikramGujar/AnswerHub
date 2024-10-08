import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {useSelector,useDispatch} from react-redux;



const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="navbar">
        <button className=''>

        </button>
        <a href="/">AnswerHUB</a>
      </div>
      <div className="navbar-links">
        {/* Navigation Links */}
        <a href="/">Home</a>
        <a href="/questions">Questions</a>
        <a href="/tags">Tags</a>
        <a href="/users">Users</a>
        <a href="/ask-question" className="ask-question-btn">
          Ask Question
        </a>
      </div>
      <div className="navbar-search">
        {/* Search Bar */}
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-profile">
        {/* User Profile Icon (can link to user profile page) */}
        <a href="/profile">
          <img
            src="/Images/AnswerHUB.png" // Placeholder image, replace with user's profile picture
            alt="User Profile"
            className="profile-img"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
