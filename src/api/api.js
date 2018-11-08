import 'dotenv/config';
import 'cross-fetch/polyfill';

import ApolloClient, { gql } from 'apollo-boost';
import { GITHUB_API_ENDPOINT } from '../util/constants';

export const githubClient = new ApolloClient({
  uri: GITHUB_API_ENDPOINT,
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.PERSONAL_ACCESS_TOKEN}`
      },
    });
  },
});

export const GITHUB_USER_QUERY = gql`{
  viewer {
    repositories(last: 100, affiliations: OWNER) {
      nodes {
        name
        description
        collaborators(last: 100) {
          nodes {
            login
          }
        }
        defaultBranchRef {
          target {
            ... on Commit {
              history(first: 100) {
                edges {
                  node {
                    committedDate
                  }
                }
              }
            }
          }
        }
        languages(last: 100) {
          edges {
            node {
              name
            }
          }
        }
      }
    }
  }
}`;