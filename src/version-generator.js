const colors = require('colors/safe');
const path = require('path');
const fs = require('fs');
const appVersion = require('../package.json').version;
const kbmVersion = require('../package.json').dependencies["@kentico/kontent-backup-manager"];

exports.createVersionFile = (filePath, appVersion) => {

    console.log(colors.cyan('\nCreating version file'));

    const src = `
export const versionInfo = {
    version: '${appVersion}',
    kbmVersion: '${kbmVersion}'
};
`;

    // ensure version module pulls value from package.json
    fs.writeFile(filePath, src, { flat: 'w' }, function (err) {
        if (err) {
            return console.log(colors.red(err));
        }

        console.log(colors.green(`Updating application version ${colors.yellow(appVersion)}`));
        console.log(`${colors.green('Writing version module to ')}${colors.yellow(filePath)}\n`);
    });
}

this.createVersionFile(
    path.join('src/version.ts'),
    appVersion,
);
