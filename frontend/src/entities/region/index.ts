import Regions from './ui/Regions.vue';
import Region from './ui/Region.vue';

export { Regions, Region as RegionComponent };
export type { Region } from './model/useRegions';
export { useRegionsStore } from './model/useRegions';
export { regionsAPI } from './api/regions';
