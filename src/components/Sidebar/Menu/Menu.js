// @flow
import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';

type Props = {
  menu: {
    label: string,
    path: string
  }[]
};

const Menu = ({ menu }: Props) => (
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
      <li className={styles['menu__list-item']}>
        <a
          href="https://lolaodelola.dev"
          className={styles['menu__list-item-link']}
          activeClassName={styles['menu__list-item-link--active']}
        >
          About Me
        </a>
      </li>
      <li className={styles['menu__list-item']}>
        <a
          href="https://lolaodelola.dev"
          className={styles['menu__list-item-link']}
          activeClassName={styles['menu__list-item-link--active']}
        >
          Jobs
        </a>
      </li>

      {menu.map((item) => (
        <li className={styles['menu__list-item']} key={item.path}>
          <Link
            to={item.path}
            className={styles['menu__list-item-link']}
            activeClassName={styles['menu__list-item-link--active']}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
