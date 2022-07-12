import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Article = {
  __typename?: 'Article';
  content: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
};

export type ArticleInput = {
  content: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteArticle?: Maybe<Scalars['Boolean']>;
  registerArticle?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['Int'];
};


export type MutationRegisterArticleArgs = {
  input?: InputMaybe<ArticleInput>;
};

export type Query = {
  __typename?: 'Query';
  getArticle?: Maybe<Array<Article>>;
};

export type DeleteArticleMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteArticleMutation = { __typename?: 'Mutation', deleteArticle?: boolean | null };

export type RegisterArticleMutationVariables = Exact<{
  input?: InputMaybe<ArticleInput>;
}>;


export type RegisterArticleMutation = { __typename?: 'Mutation', registerArticle?: boolean | null };

export type GetArticleQueryVariables = Exact<{ [key: string]: never; }>;


export type GetArticleQuery = { __typename?: 'Query', getArticle?: Array<{ __typename?: 'Article', id: number, title: string, content: string }> | null };


export const DeleteArticleDocument = gql`
    mutation deleteArticle($id: Int!) {
  deleteArticle(id: $id)
}
    `;
export const RegisterArticleDocument = gql`
    mutation registerArticle($input: ArticleInput) {
  registerArticle(input: $input)
}
    `;
export const GetArticleDocument = gql`
    query getArticle {
  getArticle {
    id
    title
    content
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    deleteArticle(variables: DeleteArticleMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteArticleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteArticleMutation>(DeleteArticleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteArticle', 'mutation');
    },
    registerArticle(variables?: RegisterArticleMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RegisterArticleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RegisterArticleMutation>(RegisterArticleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'registerArticle', 'mutation');
    },
    getArticle(variables?: GetArticleQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetArticleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetArticleQuery>(GetArticleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getArticle', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;