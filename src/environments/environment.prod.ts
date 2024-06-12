export const environment = {
  production: true,
  appName: 'Kontent Template Manager',
  basePath: '/kontent-template-manager',
  templatesSourceUrl: '/assets/templates/list.json',
  backupManagerName: 'Kontent backup manager',
  backupManagerUrl: 'https://github.com/Kentico/kontent-backup-manager-js',
  google: {
    enableTracking: true,
    trackingPrefix: '/kontent-template-manager',
    googleAnalyticsTrackingId: 'UA-69014260-7',
  },
  defaultProjects: {
    sourceProjectId: '',
    sourceProjectApiKey: '',
    targetProjectId: '',
    targetProjectApiKey: ''
  },
  storage: {
    storageName: 'templateManagerData'
  }
};
