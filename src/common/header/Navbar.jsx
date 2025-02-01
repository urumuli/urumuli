import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Toggle Menu
  const [MobileMenu, setMobileMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='categories d_flex' onClick={toggleDropdown}>
            <span className='fa-solid fa-border-all'></span>
            <h4>
              Categories <i className='fa fa-chevron-down'></i>
            </h4>
          </div>
          {dropdownOpen && (
            <div className="dropdown">
              {/* Replace this with your actual categories */}
              <ul>
                <li><Link to="/fashion">Fashion</Link></li>
                <li><Link to="/electronics">Electronics</Link></li>
                <li><Link to="/cars">Cars</Link></li>
                <li><Link to="/home-garden">Home & Garden</Link></li>
                <li><Link to="/gifts">Gifts</Link></li>
                <li><Link to="/music">Music</Link></li>
                <li><Link to="/health-beauty">Health & Beauty</Link></li>
                <li><Link to="/pets">Pets</Link></li>
                <li><Link to="/baby-toys">Baby Toys</Link></li>
                <li><Link to="/groceries">Groceries</Link></li>
                <li><Link to="/books">Books</Link></li>
              </ul>
            </div>
          )}
          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <li>
                  <Link
                    to="/"
                    style={{
                      display: 'inline-block',
                      background: 'black',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50px',
                      padding: '10px 20px',
                      fontSize: '15px',
                      textAlign: 'center',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      width: '100%',
                      maxWidth: '200px',
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      window.open('https://wa.me/250789574860', '_blank');
                    }}
                    style={{
                      background: 'black',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50px',
                      padding: '10px 20px',
                      fontSize: '15px',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      width: '100%',
                      maxWidth: '200px',
                    }}
                  >
                    Track my order
                  </button>
                </li>
              </ul>
            </ul>
            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>

      {/* CSS for dropdown (you can move this to your CSS file) */}
      <style jsx>{`
        .dropdown {
          position: absolute;
          background: white; /* Background color for dropdown */
          border: 1px solid #ccc; /* Border for dropdown */
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15); /* Shadow for dropdown */
          z-index: 1000; /* Ensure dropdown appears above other elements */
          margin-top: 10px; /* Space between header and dropdown */
          padding: 10px; /* Padding for dropdown */
        }
        .dropdown ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .dropdown li {
          margin: 5px 0; /* Space between items */
        }
        .dropdown a {
          text-decoration: none; /* Remove underline */
          color: black; /* Text color */
          display: block; /* Make the link fill the list item */
          padding: 5px; /* Padding for links */
        }
        .dropdown a:hover {
          background: #f0f0f0; /* Hover effect */
        }
      `}</style>
    </>
  );
};

export default Navbar;