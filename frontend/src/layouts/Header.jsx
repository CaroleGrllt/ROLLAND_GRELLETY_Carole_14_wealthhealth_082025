import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserPlus, faAddressBook, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef(null);

  // Fermer avec la touche Échap
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  // Focus sur le bouton fermer à l’ouverture (petit plus accessibilité)
  useEffect(() => {
    if (open && closeBtnRef.current) closeBtnRef.current.focus();
  }, [open]);

  return (
    <header className="site-header">
      <nav className="nav">
        <Link to="/" className="nav-logo">
          <img src={Logo} alt="Wealth Health Logo" />
          <h1 className="sr-only">Wealth Health</h1>
        </Link>

        {/* desktop */}
        <ul className="nav-links">
          <li>
            <Link className="main-nav-item" to="/">
              <FontAwesomeIcon icon={faHouse} className="icon" />
              Home
            </Link>
          </li>
          <li className="sep" aria-hidden="true">|</li>
          <li>
            <Link className="main-nav-item" to="/new-employee">
              <FontAwesomeIcon icon={faUserPlus} className="icon" />
              Create new employee
            </Link>
          </li>
          <li className="sep" aria-hidden="true">|</li>
          <li>
            <Link className="main-nav-item" to="/list-employees">
              <FontAwesomeIcon icon={faAddressBook} className="icon" />
              Employees list
            </Link>
          </li>
        </ul>

        {/* Bouton hamburger mobile */}
        <button
          type="button"
          className="nav-toggle"
          aria-label="Ouvrir le menu"
          aria-controls="mobile-drawer"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>

      {/* ombre + volet mobile */}
      {open && (
        <>
          <button
            className="backdrop"
            aria-label="Fermer le menu"
            onClick={() => setOpen(false)}
          />
          <aside
            id="mobile-drawer"
            className="mobile-drawer open"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
          >
            <div className="drawer-header">
              <button
                ref={closeBtnRef}
                type="button"
                className="drawer-close"
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <Link to="/" className="drawer-logo" onClick={() => setOpen(false)}>
                <img src={Logo} alt="Wealth Health Logo" />
              </Link>
            </div>
            <ul className="drawer-links" onClick={() => setOpen(false)}>
              <li>
                <Link className="main-nav-item" to="/">
                  <FontAwesomeIcon icon={faHouse} className="icon" />
                  Home
                </Link>
              </li>
              <li>
                <Link className="main-nav-item" to="/new-employee">
                  <FontAwesomeIcon icon={faUserPlus} className="icon" />
                  Create new employee
                </Link>
              </li>
              <li>
                <Link className="main-nav-item" to="/list-employees">
                  <FontAwesomeIcon icon={faAddressBook} className="icon" />
                  Employees list
                </Link>
              </li>
            </ul>
          </aside>
        </>
      )}
    </header>
  );
}
