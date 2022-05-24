import './Header.css';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/">
          <h1 className="article__header">News App</h1>
        </Link>
        <hr />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
