import { Resource } from './resource';

export type HydraComponentRegistration = {
  canRender: (resource: Resource) => boolean;
  load: () => Promise<any> 
};
