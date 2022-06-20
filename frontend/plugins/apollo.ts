import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import { BatchHttpLink } from "@apollo/client/link/batch-http";
import { provideApolloClient } from "@vue/apollo-composable";

export function createApolloClient(ssr = false) {
  const httpLink = new BatchHttpLink({
    uri: "http://localhost:8080/query",
  });

  const cache = new InMemoryCache();

  if (!ssr) {
    if (typeof window !== "undefined") {
      // @ts-expect-error
      const state = window.__APOLLO_STATE__;
      if (state) {
        cache.restore(state.defaultClient);
      }
    }
  }

  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
    ...(ssr
      ? {
          ssrMode: true,
        }
      : {
          ssrForceFetchDelay: 100,
        }),
  });

  return apolloClient;
}

export default defineNuxtPlugin((nuxtApp) => {
  const apolloClient = createApolloClient(process.server);
  provideApolloClient(apolloClient);
});
