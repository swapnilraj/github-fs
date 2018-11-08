import { MAX_REPOS_FETCH } from './constants';
import { ArgumentParser } from 'argparse';

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
    defaultValue: process.cwd(),
  }
);