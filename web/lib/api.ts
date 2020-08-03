import axios, {AxiosRequestConfig} from 'axios';
import {print, DocumentNode} from 'graphql';

export const apiClient = async <T>(query: DocumentNode, variables: Record<string, unknown> = {}): Promise<T> => {
	const options: AxiosRequestConfig = {
		method: 'post',
		url: `${process.env.GRAPHQL_URL}`,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
		}
	};

	const response = await axios({
		...options,
		data: {
			query: print(query),
			variables
		}
	});

	const {data} = response.data;

	return data as Promise<T>;
};
