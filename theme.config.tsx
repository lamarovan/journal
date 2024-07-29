import React from "react";
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <h1>Coding Journal</h1>,
  project: {
    link: 'https://github.com/lamarovan/journal'
  },
  docsRepositoryBase: 'https://github.com/lamarovan/journal',
  footer: {
    text: (
      <span>
        ©{' '}{new Date().getFullYear()}{' '}
        <a href="https://www.lamarovan.info.np/" target="_blank">
          Rovan Lama
        </a>
        .
      </span>
    )
  }

}

export default config