import React from 'react';
import PropTypes from 'prop-types';
import { rhythm } from '../utils/typography';

export default function Icon({ alt, src, uri }) {
  return (
    <a
      href={uri}
      style={{ boxShadow: 'none' }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        alt={alt}
        style={{
          width: rhythm(2),
          height: rhythm(2),
          marginBottom: 0
        }}
        src={src}
      />
    </a>
  );
}

Icon.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired
};
