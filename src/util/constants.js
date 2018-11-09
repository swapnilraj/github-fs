export const MAX_REPOS_FETCH = 20;
export const GITHUB_API_ENDPOINT = 'https://api.github.com/graphql';
export const DEFAULT_EXPLORER = 'vim';

/**
 * Flags for explorer programs
 */
export const EXPLORER_FLAGS =
{
  vim: [
    `-c "let g:netrw_banner = 0"`,
    `-c "let g:netrw_browse_split = 2"`,
    `-c "let g:netrw_altv = 1"`,
    `-c "let g:netrw_winsize = 25"`,
  ].join(' '),
};