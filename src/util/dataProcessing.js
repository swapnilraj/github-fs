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
  return (repository.description) ? respository.description : '';
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
    resolve(getCollaborators(repository).join('\n'));
  });
}