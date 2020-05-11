export const environment = {
  production: true,
  appName: 'Kontent Template Manager',
  templatesSourceUrl: 'https://raw.githubusercontent.com/Kentico/cloud-template-manager/master/templates/list.json',
  backupManagerName: 'Kontent backup manager',
  backupManagerUrl: 'https://github.com/Kentico/kontent-backup-manager-js',
  google: {
    enableTracking: true,
    trackingPrefix: '/cloud-template-manager',
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
