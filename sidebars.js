/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docs: [
    // Intro
    {
      type: 'doc',
      label: 'Introduction',
      id: 'introduction'
    },
    // Getting Start
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'quick-start',
        'installation',
      ]
    },
    // Guides
    {
      type: 'category',
      label: 'User Guides',
      collapsed: false,
      items: [
        'guides/manage-cluster',
        // Deploy
        {
          type: 'category',
          label: 'Deploy Application',
          items: [
            'guides/deploy/deploy-by-ide',
            'guides/deploy/deploy-from-helm',
            'guides/deploy/deploy-from-terminal',
            'guides/deploy/deploy-demo',
          ]
        },
        'guides/develop-app',
        'guides/debug',
        'guides/clear-pvc',
        'guides/port-forward',
        'guides/app-enhance',
        'guides/service-config',
        'guides/devcontainer-config',
      ]
    },
    // Configurations
    {
      type: 'category',
      label: 'Configuration',
      collapsed: false,
      items: [
        'config/config-ref',
        // Deployments
        {
          type: 'category',
          label: 'deployments',
          items: [
            'config/config-deploy',
            'config/config-deploy-helm',
            'config/config-deploy-manifest',
            'config/config-deploy-kustomize',
          ]
        },
        // Development
        {
          type: 'category',
          label: 'development',
          items: [
            'config/config-dev',
            'config/config-dev-port',
            'config/config-dev-sync',
            'config/config-dev-devcontainer'
          ]
        },
      ]
    },
    // Best Practice
    {
      type: 'category',
      label: 'Best Practices',
      collapsed: false,
      items: [
        // Working with Cloud
        {
          type: 'category',
          label: 'Working with Cloud',
          items: [
            'practice/cloud/tencent-tke',
            'practice/cloud/rancher-rke',
            'practice/cloud/ali-ack',
            'practice/cloud/google-gke',
            'practice/cloud/amazon-eks',
            'practice/cloud/ms-azure'
          ]
        },
        // Debug
        {
          type: 'category',
          label: 'Remote Debugging',
          items: [
            'practice/debug/php',
            'practice/debug/java',
            'practice/debug/go',
            'practice/debug/python',
          ]
        },
      ]
    },
    // Advanced
    {
      type: 'category',
      label: 'Advanced Guides',
      items: [
        // Nocalhost Server
        {
          type: 'category',
          label: 'Nocalhost Server',
          items: [
            'server/server-overview',
            'server/deploy-server',
            'server/manage-user',
            'server/manage-cluster',
            'server/manage-devspace',
            'server/manage-app'
          ]
        }
      ]
    },
    //Reference
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/nh-config'
      ]
    },
    // CLI Reference
    {
      type: 'category',
      label: 'CLI Reference',
      items: [
        'cli/cli-apply',
      ]
    },
    // FAQ
    'faq/faq',
  ]
};
