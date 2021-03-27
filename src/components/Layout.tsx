import React from 'react';
import PropTypes from 'prop-types';
import { rhythm } from '../utils/typography';
import Header from './Header';
import { Footer } from './Footer';

type Props = {
  children: React.ReactNode
  title: string
};

export default function Layout({ children, title }: Props) {
  return (
    <div
      style={{
        color: 'var(--textNormal)',
        background: 'var(--bg)',
        transition: 'color 0.2s ease-out, background 0.2s ease-out',
        minHeight: '100vh'
      }}
    >
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(35),
          padding: `2.625rem ${rhythm(3 / 4)}`
        }}
      >
        <Header title={title} />
        {children}
        <Footer />
      </div>
    </div>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element)
};
