import * as fs from 'fs';

/**
 * Make the folder specified by path.
 * Resolves if the folder creation was succesful.
 * Rejects if the folder creation failed.
 */
export function makeFolder(path) {
  return new Promise((resolve, reject) => {
    fs.mkdir(path, { recursive: true }, (err) => {
      if(!err) resolve();
      reject();
    });
  });
}