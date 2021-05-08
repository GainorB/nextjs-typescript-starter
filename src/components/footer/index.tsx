import React from 'react';

interface FooterProps {
  prop?: any;
}

export const Footer: React.FC<FooterProps> = (): JSX.Element => {
  return <h1>Footer</h1>;
};

Footer.displayName = 'Footer';

export default Footer;
