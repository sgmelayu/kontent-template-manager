export const environment = {
  production: true,
  appName: 'Template manager',
  defaultProjects: {
    languages: '',
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
