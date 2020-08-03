// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: 'Kontent Template Manager',
  templatesSourceUrl: 'https://raw.githubusercontent.com/Kentico/cloud-template-manager/master/templates/list.json',
  backupManagerName: 'Kontent backup manager',
  backupManagerUrl: 'https://github.com/Kentico/kontent-backup-manager-js',
  defaultProjects: {
    sourceProjectId: 'f249eb83-18fd-01b8-2db7-c561bcb1ed1e',
    // tslint:disable-next-line:max-line-length
    sourceProjectApiKey: 'ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogIjEzZWQyYjg4NDU0ODRmMjBiNWQ1ZWE5NGVkNWU5ZjRhIiwNCiAgImlhdCI6ICIxNTU0MzY4NDY4IiwNCiAgImV4cCI6ICIxODk5OTY4NDY4IiwNCiAgInByb2plY3RfaWQiOiAiZjI0OWViODMxOGZkMDFiODJkYjdjNTYxYmNiMWVkMWUiLA0KICAidmVyIjogIjIuMS4wIiwNCiAgInVpZCI6ICJ1c3JfMHZRWUJDcUF2cm5vNXJpZkhuaVlFRyIsDQogICJhdWQiOiAibWFuYWdlLmtlbnRpY29jbG91ZC5jb20iDQp9.mrlstpy1goa7pCWd1RnJGRygdn0HrwsZ6_mrYYFpbfM',
    // sourceProjectId: 'b062c2f0-1a33-0070-794f-b48fa8bc1899',
    targetProjectId: 'ede994d8-bb05-01b5-9c33-8b65e7372306',
    // tslint:disable-next-line:max-line-length
    targetProjectApiKey: 'ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogIjRiODU2YmYxMTJhMDQ4NzBiNGIwMGM0ZDc5NmRkZTE3IiwNCiAgImlhdCI6ICIxNTUyNjQ5NzY1IiwNCiAgImV4cCI6ICIxODk4MjQ5NzY1IiwNCiAgInByb2plY3RfaWQiOiAiZWRlOTk0ZDhiYjA1MDFiNTljMzM4YjY1ZTczNzIzMDYiLA0KICAidmVyIjogIjIuMS4wIiwNCiAgInVpZCI6ICJ1c3JfMHZRWUJDcUF2cm5vNXJpZkhuaVlFRyIsDQogICJhdWQiOiAibWFuYWdlLmtlbnRpY29jbG91ZC5jb20iDQp9.Pb7cpftOuzWFsppX1lPjZWkOviC5jDOuZyHKwYgPWNU'
  },
  google: {
    enableTracking: false,
    trackingPrefix: '/kontent-template-manager',
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
