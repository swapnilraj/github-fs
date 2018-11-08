import * as path from 'path';

import { argParser } from './util/utils';
import { getName } from './util/dataProcessing';
import { githubClient, GITHUB_USER_QUERY } from './api/api';
import { makeFolder } from './util/filesystem';

// Parse the argument object.
const args = argParser.parseArgs();

