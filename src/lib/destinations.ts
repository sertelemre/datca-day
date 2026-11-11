import { beachDetails } from './destination-beaches';
import { cultureDetails } from './destination-culture';
import { placeDetails } from './destination-places';
import type { DestinationDetail } from './destination-types';

export const destinations: Partial<Record<string, DestinationDetail>> = {
  ...placeDetails,
  ...cultureDetails,
  ...beachDetails,
};
