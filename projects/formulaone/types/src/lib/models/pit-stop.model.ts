import { EntityType } from "../common/entity-type.model";
import { Circuit } from "./circuit.model";
import { ConstructorStandingEntity } from "./constructor-standing.model";
import { EntityMetadata } from "./metadata.model";


export interface PitStop {
    driverId: string;
    lap: string;
    stop: string;
    time: string;
    duration: string;
}

export interface PitStopEntity {
    season: string;
    round: string;
    url: string;
    raceName: string;
    Circuit: Circuit;
    date: string;
    time: string;
    PitStops: PitStop[];
}

export type PitStops = {
    [EntityType.RACES]: PitStopEntity[]
} & EntityMetadata & {
    season?: string,
    round?: string,
    stop?: string 
}