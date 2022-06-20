import { GraphQLClient } from "graphql-request";
import { getSdk } from "~/lib/generated/client";

const url = "http://localhost:8080/query";
export const sdk = getSdk(new GraphQLClient(url));
