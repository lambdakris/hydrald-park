import { InjectionToken } from '@angular/core';
import { HydraFrameworkConfig } from '../model';

export const HydraFrameworkConfigurationService = 
  new InjectionToken<HydraFrameworkConfig>(
    "HydraFrameworkConfig");
