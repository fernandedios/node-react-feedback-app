import React from 'react';

const TopHeader = () => {
  return (
    <div className="top-menu" id="top-surveyly">
      <p>
        <span className="left">
          <a href="#"><i className="fa fa-map-marker"></i>Pasig City, Philippines</a>
          <a href="#"><i className="fa fa-mobile-phone"></i>+63 2123 4567</a>
          <a href="#"><i className="fa fa-envelope"></i>email@surveyly.com</a>
        </span>
        <span className="right hidden-sm-down">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-google-plus"></i></a>
        </span>
      </p>
    </div>
  );
};

export default TopHeader;
