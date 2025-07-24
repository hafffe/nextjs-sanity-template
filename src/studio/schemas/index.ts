import type {SchemaTypeDefinition} from "sanity";
import {definitions} from "./definitions";
import {documents} from "./documents";
import {objects} from "./objects";

export const schemasTypes: SchemaTypeDefinition[] = [...documents, ...definitions, ...objects];
