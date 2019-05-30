// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: 'Template manager',
  templatesSourceUrl: 'https://raw.githubusercontent.com/Kentico/cloud-template-manager/master/templates/list.json',
  defaultProjects: {
    sourceProjectId: 'f249eb83-18fd-01b8-2db7-c561bcb1ed1e',
    // tslint:disable-next-line:max-line-length
    sourceProjectApiKey: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxM2VkMmI4ODQ1NDg0ZjIwYjVkNWVhOTRlZDVlOWY0YSIsImlhdCI6IjE1NTQzNjg0NjgiLCJleHAiOiIxODk5OTY4NDY4IiwicHJvamVjdF9pZCI6ImYyNDllYjgzMThmZDAxYjgyZGI3YzU2MWJjYjFlZDFlIiwidmVyIjoiMi4xLjAiLCJ1aWQiOiJ1c3JfMHZRWUJDcUF2cm5vNXJpZkhuaVlFRyIsImF1ZCI6Im1hbmFnZS5rZW50aWNvY2xvdWQuY29tIn0.UJ8rpJ5fKrCco4_1JvVtMFvUIyrIHr1Wo-VTRbdx34M',
    languages: 'en-US; es-ES',
    // sourceProjectId: 'b062c2f0-1a33-0070-794f-b48fa8bc1899',
    targetProjectId: 'ede994d8-bb05-01b5-9c33-8b65e7372306',
    // tslint:disable-next-line:max-line-length
    targetProjectApiKey: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0Yjg1NmJmMTEyYTA0ODcwYjRiMDBjNGQ3OTZkZGUxNyIsImlhdCI6IjE1NTI2NDk3NjUiLCJleHAiOiIxODk4MjQ5NzY1IiwicHJvamVjdF9pZCI6ImVkZTk5NGQ4YmIwNTAxYjU5YzMzOGI2NWU3MzcyMzA2IiwidmVyIjoiMi4xLjAiLCJ1aWQiOiJ1c3JfMHZRWUJDcUF2cm5vNXJpZkhuaVlFRyIsImF1ZCI6Im1hbmFnZS5rZW50aWNvY2xvdWQuY29tIn0.d5ynvZh06reXR2JRSR86Vp9jhFFqmX1mJlD_jzuHG84'
  },
  requestDelay: 0,
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
    enableTracking: false,
    trackingPrefix: '/cloud-template-manager',
    googleAnalyticsTrackingId: 'UA-69014260-7',
  },
  storage: {
    storageName: 'templateManagerData'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
