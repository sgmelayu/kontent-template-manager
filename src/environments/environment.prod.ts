export const environment = {
  production: true,
  appName: 'KC Import tool',
  defaultProjects: {
    sourceProjectId: '',
    targetProjectId: '',
    targetProjectApiKey: ''
  },
  requestDelay: 80,
  export: {
    filenames: {
      packagePrefix: 'export_',
      contentItems: 'content-items.json',
      contentTypes: 'content-types.json',
      taxonomies: 'taxonomies.json',
      assetsFolder: 'assets'
    }
  }
};
