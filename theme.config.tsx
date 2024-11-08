import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  primaryHue: 52,
  logo: (
    <>
      <img
        src= 'images/jb2a-wiki-banner-02.png'
        decoding='async'
        loading='lazy'
        style= {{ width: "200px" }}
        alt= "JB2A"
      />
    </>
  ),
  project: {
    link: 'https://github.com/Jules-Bens-Aa/jb2a-wiki-nextra',
  },
  chat: {
    link: 'https://discord.gg/gmd8MAPX4m',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  navigation: {
    prev: true,
    next: true
  },
}

export default config
