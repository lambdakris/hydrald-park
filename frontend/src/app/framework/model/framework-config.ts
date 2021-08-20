import { HydraComponentRegistration } from './hydra-component-registration';

export type HydraFrameworkConfig = Partial<{
  components: HydraComponentRegistration[]
}>;
