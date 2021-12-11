import { EntityType } from "../common/entity-type.model";
import { EntityMetadata } from "./metadata.model";
import { Circuit } from "./circuit.model";
import { Constructor } from "./constructor.model";
import { Driver } from "./driver.model";


export interface Time {
    millis?: string;
    time: string;
}

export interface AverageSpeed {
    units: string;
    speed: string;
}

export interface FastestLap {
    rank: string;
    lap: string;
    Time: Time;
    AverageSpeed: AverageSpeed;
}

export interface RaceResultDetail {
    number: string;
    position: string;
    positionText: string;
    points: string;
    Driver: Driver;
    Constructor: Constructor;
    grid: string;
    laps: string;
    status: string;
    Time: Time;
    FastestLap: FastestLap;
}

export interface RaceResultEntity {
    season: string;
    round: string;
    url: string;
    raceName: string;
    Circuit: Circuit;
    date: string;
    time: string;
    Results: RaceResultDetail[];
}

export type RaceResult = {
    [EntityType.RACES]: RaceResultEntity[]
} & EntityMetadata