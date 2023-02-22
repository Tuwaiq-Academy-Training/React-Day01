import React from 'react';
import { INavbarList } from '../types/mainTypes';

interface INavbar {
  webSiteName: string;
  navbarList: INavbarList[];
}

const Navbar = ({ webSiteName, navbarList }: INavbar) => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary fixed-top'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          {webSiteName}
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            {navbarList.map((item, index) => {
              return (
                <a key={index} className='nav-link' href={item.url}>
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
