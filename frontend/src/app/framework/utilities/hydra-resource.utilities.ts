import { Collection, RdfResource, Resource } from 'alcaeus';
import { hydra } from '../vocabularies';

export const getTitle = (resource: RdfResource) =>
    resource.getString(hydra.title, { strict: false }) ||
    resource.getString("http://purl.org/dc/terms/title", { strict: false}) ||
    resource.id.value;

export const getDescription = (resource: RdfResource) =>
    resource.getString(hydra.description, { strict: false });

export const isCollection = (resource: RdfResource): resource is Collection =>
    resource.types.has(hydra.Collection);

export const getMemberAssertion = (collection: Collection) =>
    collection.memberAssertion ??
    collection.member ??
    [];