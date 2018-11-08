import * as path from 'path';
import * as fs from 'fs';

import { argParser } from './util/utils';
import { getName, summarizeRepository } from './util/dataProcessing';
import { githubClient, GITHUB_USER_QUERY } from './api/api';
import { makeFolder } from './util/filesystem';

// Parse the argument object.
const args = argParser.parseArgs();

githubClient.query({
  query: GITHUB_USER_QUERY
}).then(res => processRepositories(args, res));

function processRepositories(args, repositories) {
  const data = repositories['data']['viewer']['repositories']['nodes'];
  data.forEach(repo => processRepository(args, repo));
}

function processRepository(args, repository) {
  const repoDirectory = path.resolve(args.directory, getName(repository));
  makeFolder(repoDirectory)
    .then(() => summarizeRepository(repository))
    .then(data => fs.writeFile(`${repoDirectory}/summary.txt`, data, (err) => {
      if (err) console.error(err)
    }))
    .catch(console.error);
}
