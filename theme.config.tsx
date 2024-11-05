import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
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
  head() {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      'https://drugxpert.net/' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'DrugXpert'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'DrugXpert'}
        />
      </>
    );
  },
};

export default config;
