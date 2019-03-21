export const environment = {
  production: true,
  appName: 'KC Import tool',
  defaultProjects: {
    sourceProjectId: 'f249eb83-18fd-01b8-2db7-c561bcb1ed1e',
    targetProjectId: 'ede994d8-bb05-01b5-9c33-8b65e7372306',
    targetProjectApiKey: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0Yjg1NmJmMTEyYTA0ODcwYjRiMDBjNGQ3OTZkZGUxNyIsImlhdCI6IjE1NTI2NDk3NjUiLCJleHAiOiIxODk4MjQ5NzY1IiwicHJvamVjdF9pZCI6ImVkZTk5NGQ4YmIwNTAxYjU5YzMzOGI2NWU3MzcyMzA2IiwidmVyIjoiMi4xLjAiLCJ1aWQiOiJ1c3JfMHZRWUJDcUF2cm5vNXJpZkhuaVlFRyIsImF1ZCI6Im1hbmFnZS5rZW50aWNvY2xvdWQuY29tIn0.d5ynvZh06reXR2JRSR86Vp9jhFFqmX1mJlD_jzuHG84'
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
