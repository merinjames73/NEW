import React from 'react';
import './Sidebar.css';
import { FaTachometerAlt, FaBoxes, FaChartLine } from 'react-icons/fa';
import { FaLetterboxd } from 'react-icons/fa6';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>FAPSS</h2>
      </div>
      <ul>
      <li>
          <FaLetterboxd className="icon" />
          Dashboard
        </li>
        <li className="active">
          <FaTachometerAlt className="icon" />
          Product
        </li>
        <li>
          <FaBoxes className="icon" />
          Category
        </li>
        <li>
          <FaChartLine className="icon" />
          Report
        </li>
      </ul>
      <div class="card">
    <div class="circle"></div>
    <div class="circlee"></div>
     <div class="content">
        <h2>Lorem ipsum</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut erat purus.</p>
    </div>
</div>


    </div>
  );
}

export default Sidebar;
