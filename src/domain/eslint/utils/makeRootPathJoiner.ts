import { flatMap } from 'lodash-es';
import path from 'node:path';
import * as process from 'node:process';

const flapMapCallBack =
  (root = process.cwd()) =>
  (pattern: string): Array<string> =>
    (Array.isArray(pattern) ? pattern : [pattern]).map((item: string) =>
      path.join(root, item),
    );

export const makeRootPathJoiner =
  (root = process.cwd()) =>
  (...patterns: string[]) =>
    flatMap(patterns, flapMapCallBack(root));
