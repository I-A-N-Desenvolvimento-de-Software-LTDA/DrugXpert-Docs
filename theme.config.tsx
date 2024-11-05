import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import Image from 'next/image';
import Logo from './public/assets/logo.png';

const config: DocsThemeConfig = {
  logo: (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <Image 
        src={Logo} 
        alt="DrugXpert Logo" 
        height={45}
        width={45}  
        style={{ marginRight: '10px' }} 
      />
      <strong>DrugXpert</strong>&nbsp;<span>Documentation</span>
    </span>
  ),
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: (
      <>
        &copy; {new Date().getFullYear()} DrugXpert. All rights reserved.
      </>
    ),
  },
};

export default config;
