import cl from './styles.module.css';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <div className={cl.menu}>
      <ul className={cl.navlist}>
        <li><Link to="/" className={cl.link}>Home</Link></li>
        <li><Link to="/movies" className={cl.link}>Movies</Link></li>
        <li><Link to="/series" className={cl.link}>Series</Link></li>
      </ul>
    </div>
  );
};
