import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql/v1',
  cache: new InMemoryCache(),
})

export default client;