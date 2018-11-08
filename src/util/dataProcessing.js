/**
 * Returns a list of collbarotors for a reposiotry.
 */
function getCollaborators(repository) {
  return repository.collaborators.nodes.map(node => node.login);
}

/**
 * Returns the description of repo if availbale.
 */
function getDescription(repository) {
  return (repository.description) ? repository.description : '';
}

/**
 * Returns a commit dates for the repository, if function
 * f is supplied then f function is mapped over the dates.
 */
function getCommitDates(repository, f = x => x) {
  try {
    return repository['defaultBranchRef']['target']['history']['edges']
      .map(n => f(n['node']['committedDate']))
  } catch(e) {
    return [];
  }
}

/**
 * Returns a list of languages used in a repository.
 */
function getLanguages(repository) {
  return repository['languages']['edges'].map(n => n['node']['name']);
}

/**
 * Returns the name of repo.
 */
export function getName(repository) {
  return repository.name;
}

/**
 * Returns a string summary of the repository object.
 */
export function summarizeRepository(repository) {
  return new Promise((resolve, reject) => {
    const summary =
`## ${getName(repository)}
- ${getDescription(repository)}

## Collaborators
${getCollaborators(repository).join('\n')}

## Commits
${getCommitDates(repository).join('\n')}

## Languages
${getLanguages(repository).join('\n')}
`;

    resolve(summary);
  });
}