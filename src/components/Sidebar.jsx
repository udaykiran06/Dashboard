// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import {
//   FaChartBar, FaUserGraduate, FaBriefcase, FaClipboardList, FaLaptop,
//   FaFileAlt, FaIndustry, FaUsers, FaPhone, FaUserTie, FaClipboardCheck
// } from 'react-icons/fa';
// import './Sidebar.css';

// const menuItems = [
//   { label: 'Dashboard', icon: <FaChartBar />, path: '/' },
//   { label: 'Admissions', icon: <FaUserGraduate />, path: '/admissions' },
//   { label: 'Placements', icon: <FaBriefcase />, path: '/placements' },
//   { label: 'Assets', icon: <FaLaptop />, path: '/assets' },
// //   { label: 'Examinations & Assessments', icon: <FaFileAlt />, path: '/exams' },
//   { label: 'Assessments', icon: <FaFileAlt />, path: '/assessments' },
//   { label: 'Daily Practice & Assessments', icon: <FaClipboardCheck />, path: '/practice-assessments' },
//   { label: 'Staff Recruitment', icon: <FaUserTie />, path: '/staff-recruitment' },
//   { label: 'Industry Connects', icon: <FaIndustry />, path: '/industry' },
//   { label: 'HRMS', icon: <FaUsers />, path: '/hrms' },
//   { label: 'Vendor Contacts', icon: <FaPhone />, path: '/vendor-contacts' },
//   { label: 'Reports', icon: <FaClipboardList />, path: '/reports' },
// ];

// const Sidebar = () => {
//   const location = useLocation();

//   return (
//     <div className="sidebar">
//       <div className="sidebar-header">
//         <img src="/Logo1.png" alt="VidyaDristi Logo" className="sidebar-logo" />
//         <span className="app-name">VidyaDristi</span>
//       </div>
//       <ul>
//         {menuItems.map((item, index) => {
//           const isActive = location.pathname === item.path;

//           return (
//             <li key={index}>
//               <Link
//                 to={item.path}
//                 className={`sidebar-link ${isActive ? 'active' : ''}`}
//               >
//                 <span className="icon">{item.icon}</span>
//                 <span className="label">{item.label}</span>
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;


import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaChartBar, FaUserGraduate, FaBriefcase, FaClipboardList, FaLaptop,
  FaFileAlt, FaIndustry, FaUsers, FaPhone, FaUserTie, FaClipboardCheck,
  FaBell, FaUserCircle, FaCog
} from 'react-icons/fa';
import './Sidebar.css';

const menuItems = [
  { label: 'Dashboard', icon: <FaChartBar />, path: '/' },
  { label: 'Admissions', icon: <FaUserGraduate />, path: '/admissions' },
  { label: 'Placements', icon: <FaBriefcase />, path: '/placements' },
  { label: 'Assets', icon: <FaLaptop />, path: '/Assets' },
  { label: 'Assessments', icon: <FaFileAlt />, path: '/assessments' },
  { label: 'Daily Practice & Assessments', icon: <FaClipboardCheck />, path: '/practice-assessments' },
  { label: 'Staff Recruitment', icon: <FaUserTie />, path: '/staff-recruitment' },
  { label: 'Industry Connects', icon: <FaIndustry />, path: '/IndustryConnects' },
  { label: 'HRMS', icon: <FaUsers />, path: '/hrms' },
  { label: 'Vendor Contacts', icon: <FaPhone />, path: '/vendor-contacts' },
  { label: 'Reports', icon: <FaClipboardList />, path: '/reports' },
//   { label: 'Notifications', icon: <FaBell />, path: '/notifications' },
//   { label: 'Profile', icon: <FaUserCircle />, path: '/profile' },
//   { label: 'Settings', icon: <FaCog />, path: '/settings' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="/logo1.jpg" alt="VidyaDristi Logo" className="sidebar-logo" />
        <span className="app-name">VidyaDristi</span>
      </div>
      <ul>
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <li key={index}>
              <Link
                to={item.path}
                className={`sidebar-link ${isActive ? 'active' : ''}`}
              >
                <span className="icon">{item.icon}</span>
                <span className="label">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
