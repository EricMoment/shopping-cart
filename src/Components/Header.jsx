import './Header.css'
import { Link } from 'react-router-dom';

const Header = ({count}) => {
  return (
    <div className="header">
      <Link to={'/'} className='headerHome'>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="green" viewBox="0 0 16 16">
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
        </svg>        
        <div>VanillaGoods.com</div>
      </Link>
      <div className="headerNavi">
        <Link to='/cart'>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="green" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg>
        </Link>
        <div className='headerNaviCount'>{count}</div>
      </div>
    </div>
  );
};

export default Header;