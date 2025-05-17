import { flatMap } from 'lodash-es';
import path from 'node:path';
import * as process from 'node:process';

const flapMapCallBack =
  (root = process.cwd()) =>
  (pattern) =>
    (Array.isArray(pattern) ? pattern : [pattern]).map((item) =>
      path.join(root, item),
    );

export const makeRootPathJoiner =
  (root = process.cwd()) =>
  (...patterns) =>
    flatMap(patterns, flapMapCallBack(root));
