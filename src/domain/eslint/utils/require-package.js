import { get } from 'lodash-es';

import packageJson from '../../../../package.json';
import path from 'node:path';

const log = (message = '') => process.stderr.write(`${message}\n`);

/**
 * @returns string The name of the package manager.
 */
function readPackageManager() {
  const match = process.env['npm_config_user_agent']?.match(/^(?<pm>\w+)\//);
  return match?.groups ? match.groups?.['pm'] : 'npm';
}

/**
 * @param configName - string configName
 * @param packageName - string packageName
 */
export const requirePackage = (configName, packageName) => {
  try {
    path.resolve(packageName);
  } catch (error) {
    const packageManager = readPackageManager();
    const command = packageManager === 'yarn' ? 'add' : 'install';

    log(
      `The \`${configName}\` config requires an optional peer dependency, which has not been installed.`,
    );
    log();
    log('To install it, run:');
    log(
      //@ts-expect-error string interpolation
      `- ${packageManager} ${command} ${packageName}@${packageJson.peerDependencies[packageName]}`,
    );
    log(get(error, ['message'], 'error'));
  }
};
