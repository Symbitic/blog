import React from 'react';
import PropTypes from 'prop-types';
import { rhythm } from '../utils/typography';
import { graphql, useStaticQuery } from 'gatsby';

//@ts-ignore
import * as styles from './Footer.module.css';
//@ts-ignore
import email from '../assets/email.svg';
//@ts-ignore
import github from '../assets/github.svg';
//@ts-ignore
import twitter from '../assets/twitter.svg';
//@ts-ignore
import rss from '../assets/rss.svg';

type Props = {};

type IconProps = {
  alt: string;
  src: string;
  uri: string;
};

function Icon({ alt, src, uri }: IconProps) {
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
          //marginBottom: 0
        }}
        src={src}
      />
    </a>
  );
}

export function Footer(props: Props) {
  const {
    site: { siteMetadata }
  } = useStaticQuery(
    graphql`
      query Footer {
        site {
          siteMetadata {
            social {
              email
              github
              twitter
            }
          }
        }
      }
    `
  );

  const emailUri = `mailto:${siteMetadata.social.email}`;
  const githubUri = `https://github.com/${siteMetadata.social.github}`;
  const twitterUri = `https://twitter.com/${siteMetadata.social.twitter}`;

  const showTwitter = false;

  return (
    <footer
      style={{
        marginTop: rhythm(2.5),
        paddingTop: rhythm(1)
      }}
    >
      <div className={styles.icons}>
        <Icon alt="RSS" src={rss} uri='/rss.xml' />
        {showTwitter && <Icon alt="Twitter" src={twitter} uri={twitterUri} />}
        <Icon alt="GitHub" src={github} uri={githubUri} />
        <Icon alt="Email" src={email} uri={emailUri} />
      </div>


    </footer>
  );
}
