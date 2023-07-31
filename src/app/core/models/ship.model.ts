import {ShipMission} from "./ship-mission.model";

export interface Ship{
  abs: number
  active: boolean
  attempted_landings: number
  class: number
  course_deg: number
  home_port: string
  id: number
  image: string
  imo: number
  missions: ShipMission[]
  mmsi: number
  model: string
  name: string
  position: number
  roles: [string]
  speed_kn: number
  status: string
  successful_landings: number
  type: string
  url: string
  weight_kg: number
  weight_lbs: number
  year_built: number
}
