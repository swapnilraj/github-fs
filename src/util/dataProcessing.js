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
 * Returns a commit dates for teh repository, if function
 * f is supplied then f function is mapped over the dates.
 */
export function getCommitDates(repository, f = x => x) {
  try {
    return repository['defaultBranchRef']['target']['history']['edges']
      .map(n => f(n['node']['committedDate']))
  } catch(e) {
    return [];
  }
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
`;

    resolve(summary);
  });
}