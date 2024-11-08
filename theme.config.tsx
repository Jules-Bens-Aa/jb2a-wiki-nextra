import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  primaryHue: { dark: 45, light: 35 },
  primarySaturation: { dark: 100, light: 50 },
  
  logo: (
    <>
      <img
        src= '/images/jb2a-wiki-banner-02.png'
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
    // icon: (
    //   <>
    //     <img
    //       src= 'https://static-00.iconduck.com/assets.00/discord-icon-2048x2048-nnt62s2u.png'
    //       style= {{ width: "30px" }}
    //       alt= "Discord-Server"
    //     />
    //   </>
    // )
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'JB2A wiki',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
    autoCollapse: true
  },
  navigation: {
    prev: true,
    next: true
  },
  editLink: {
    component: null
  },
  feedback: {
    content: null
  },
  search: {
    placeholder: "Search the wiki!😎"
  }
}

export default config
