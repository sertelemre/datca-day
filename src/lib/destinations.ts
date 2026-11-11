import { beachDetails } from './destination-beaches';
import { cultureDetails } from './destination-culture';
import { placeDetails } from './destination-places';
import { boatTours } from './tour-boats';
import { landTours } from './tour-land';
import { vineyardVisit } from './tour-vineyard';
import { waterTours } from './tour-water';
import type { DestinationDetail } from './destination-types';

export const destinations: Partial<Record<string, DestinationDetail>> = {
  ...placeDetails,
  ...cultureDetails,
  ...beachDetails,
  ...boatTours,
  ...landTours,
  ...waterTours,
  'datca-baglari': vineyardVisit,
};
