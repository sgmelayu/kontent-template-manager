export const environment = {
  production: true,
  appName: 'Project manager',
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
      assetsFolder: 'assets'
    }
  }
};
