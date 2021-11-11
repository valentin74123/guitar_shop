import React from 'react';
import {useSelector} from 'react-redux';

const Header = () => {
  const {testInfo} = useSelector((state) => state.TEST);

  return (
    <header className="header">
      <span>{testInfo.test}</span>
    </header>
  );
};

export default Header;
