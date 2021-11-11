import React from 'react';
import {useSelector} from 'react-redux';

const Footer = () => {
  const {testInfo} = useSelector((state) => state.TEST);

  return (
    <footer className="footer">
      <span>{testInfo.test}</span>
    </footer>
  );
};

export default Footer;
