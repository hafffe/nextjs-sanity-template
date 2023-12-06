import {type QueryParams, type UseQueryOptionsDefinedInitial} from "@sanity/react-loader";
import * as queryStore from "@sanity/react-loader";

export const useQuery = <QueryResponseResult = unknown, QueryResponseError = unknown>(
  query: string,
  params?: QueryParams,
  options?: UseQueryOptionsDefinedInitial<QueryResponseResult>,
) => {
  const snapshot = queryStore.useQuery<QueryResponseResult, QueryResponseError>(query, params, options);

  if (snapshot.error) {
    throw snapshot.error;
  }

  return snapshot;
};

export const {useLiveMode} = queryStore;
