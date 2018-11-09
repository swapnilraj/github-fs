import { resolve } from 'path';

import { ArgumentParser } from 'argparse';

import { DEFAULT_EXPLORER, MAX_REPOS_FETCH } from './constants';

export const argParser = new ArgumentParser({
  addHelp: true,
  description: 'Github statistics on your file-system',
});

argParser.addArgument(
  ['-n', '--number-repos'],
  {
    help: 'Maximum number of repositories to fetch data about.',
    defaultValue: MAX_REPOS_FETCH,
  }
);

argParser.addArgument(
  ['-d', '--directory'],
  {
    help: 'Working directory for the project',
    defaultValue: resolve(process.cwd(), 'github.com'),
  }
);

argParser.addArgument(
  ['-e', '--explorer'],
  {
    help: 'Explorer command for the project',
    defaultValue: DEFAULT_EXPLORER,
  }
)