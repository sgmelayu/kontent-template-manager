export const environment = {
  production: true,
  appName: 'Template manager',
  templatesSourceUrl: 'https://raw.githubusercontent.com/Kentico/cloud-template-manager/master/templates/list.json',
  defaultProjects: {
    languages: '',
    sourceProjectApiKey: '',
    sourceProjectId: '',
    targetProjectId: '',
    targetProjectApiKey: ''
  },
  requestDelay: 80,
  export: {
    filenames: {
      packagePrefix: 'export_',
      assets: 'assets.json',
      languageVariants: 'language-variants.json',
      contentItems: 'content-items.json',
      contentTypes: 'content-types.json',
      taxonomies: 'taxonomies.json',
      assetsFolder: 'assets',
      metadata: 'metadata.json'
    }
  },
  google: {
    enableTracking: true,
    googleAnalyticsTrackingId: 'UA-69014260-7'
  },
  storage: {
    storageName: 'templateManagerData'
  }
};
