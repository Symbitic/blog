import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { scale } from '../utils/typography';
import cx from 'classnames';

//@ts-ignore
import * as styles from './Header.module.css';
//@ts-ignore
import profilePic from '../assets/profile-pic.jpg';

export default function Header({ title }) {
  const [active, setActive] = useState(false);

  const onClick = e => {
    e.preventDefault();
    setActive(!active);
  }

  return (
    <nav className={cx(styles.navbar)} role="navigation" aria-label="main navigation">
      <div className={cx(styles.brand)}>
        <div className={cx(styles.item)}>
          <img className={styles.img} src={profilePic} alt="" style={{ borderRadius: '50%' }} />
        </div>

        <Link to="/" aria-current="page" className={cx(styles.item, styles.link)} style={{...scale(0.75)}} aria-label="Navigate to home">
          <strong>{title}</strong>
        </Link>

        <div role="button" className={cx(styles.burger, styles.item, active && styles.active)} aria-label="menu" aria-expanded={active} data-target="navbar" onClick={onClick}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div id="navbar" className={cx(styles.menu, active && styles.active)}>
        <div className={cx(styles.end)}>
          <Link to={'/blog'} aria-label="Read my blog" className={cx(styles.item, styles.link)} style={{...scale(0.25)}}>Blog</Link>
          <Link to={'/projects'} aria-label="Read my projects" className={cx(styles.item, styles.link)} style={{...scale(0.25)}}>Projects</Link>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};
