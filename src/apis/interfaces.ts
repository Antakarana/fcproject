export interface Rocket {
  reusable: Boolean,
  engines: number,
  fuel_amount_tons: DoubleRange,
  burn_time_sec: number,
  flickr_images: Object,
  name: string,
  type: string,
  active: Boolean,
  stages: number,
  boosters: number,
  cost_per_launch: DoubleRange,
  success_rate_pct: number,
  first_flight: string,
  country: string,
  company: string,
  wikipedia: string,
  description: string,
  id: string,
  height: Height,
  diameter: Diameter,
  mass: Mass
}
export interface Height {
  meters: 22.25,
  feet: 73
}
export interface Diameter {
  meters: 1.68,
  feet: 5.5
}
export interface Mass {
  kg: 30146,
  lb: 66460
}