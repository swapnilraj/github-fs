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
