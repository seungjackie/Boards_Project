import { ApolloClient, createHttpLink } from "@apollo/client";
import { cache } from "./cache";

// graphql을 포트로 연결
const httpLink = createHttpLink({
  // createhttpLink 의 uri에는 graphql 주소 적기
  uri: "http://localhost:6500/graphql",
});

export const client = new ApolloClient({
  link: httpLink,
  cache: cache,
});
