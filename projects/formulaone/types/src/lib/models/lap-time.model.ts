import { EntityType } from "../common/entity-type.model";
import { Circuit } from "./circuit.model";
import { ConstructorStandingEntity } from "./constructor-standing.model";
import { EntityMetadata } from "./metadata.model";

export interface Timing {
    driverId: string;
    position: string;
    time: string;
}

export interface Lap {
    number: string;
    Timings: Timing[];
}

export interface LapTimeEntity {
    season: string;
    round: string;
    url: string;
    raceName: string;
    Circuit: Circuit;
    date: string;
    time: string;
    Laps: Lap[];
}

export type LapTimes = {
    [EntityType.RACES]: LapTimeEntity[]
} & EntityMetadata & {
    season?: string,
    round?: string 
}