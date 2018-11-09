# github-fs

Compiles the github statistics for a user on the filesystem.
Makes a folder for each repo for a user, and adds a summary in a text file.

The experience is best enjoyed with `vim`, so by default it launches `vim` but that can changed with a flag.

## Prerequisites

* Node (>= 8.0) probably
* Github account
* Github Personal Access Token

### Steps to run

* Get your github [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/).
* Add it to a file, called `.env`

``` shell
PERSONAL_ACCESS_TOKEN=<YOUR_TOKEN>
```

* Run `yarn` to fetch the dependencies.
* Run `yarn buld` to run the project.

## Command line flags

```
yarn build --help
usage: index.js [-h] [-n NUMBER_REPOS] [-d DIRECTORY] [-e EXPLORER]

Github statistics on your file-system

Optional arguments:
  -h, --help            Show this help message and exit.
  -n NUMBER_REPOS, --number-repos NUMBER_REPOS
                        Maximum number of repositories to fetch data about.
  -d DIRECTORY, --directory DIRECTORY
                        Working directory for the project.
  -e EXPLORER, --explorer EXPLORER
                        Explorer command for the project.
```