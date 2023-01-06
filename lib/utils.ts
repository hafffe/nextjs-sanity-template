import {clsx} from 'clsx';
import type {ClassValue} from 'clsx';

export const cn = (...inputs: ClassValue[]) => {
	return clsx(inputs);
};
