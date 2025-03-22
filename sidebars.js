// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // docsSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  docsSidebar: [
    {
      type: 'html', 
      value: 'Introduction',
      className: 'menu__category menu__spacer', 
    },
    'introduction/orion',
    'introduction/design_principles',


    {
      type: 'html', 
      value: '&nbsp;',
      className: 'menu__spacer',
    },

    {
      type: 'html', 
      value: 'Protocol Design',
      className: 'menu__category menu__spacer',
    },
    'protocol_design/overview',
    'protocol_design/tokenomics',
    'protocol_design/batching_netting',
    'protocol_design/permissionless_vaults',


    {
      type: 'html', 
      value: '&nbsp;',
      className: 'menu__spacer',
    },

    {
      type: 'html', 
      value: 'Financial Machine Learning',
      className: 'menu__category menu__spacer',
    },
    'financial_machine_learning/why_ml',


    {
      type: 'html', 
      value: '&nbsp;',
      className: 'menu__spacer',
    },

    {
      type: 'html', 
      value: 'fhEVM',
      className: 'menu__category menu__spacer',
    },
    'fhEVM/what_is_fhEVM',


    // {
    //   type: 'category',
    //   label: 'Docs Extras',
    //   collapsed: true,
    //   items: [
    //     'docs-extras/manage-docs-versions',
    //     'docs-extras/translate-your-site',
    //   ],
    // },
  ],
};
export default sidebars;
