import { EntityType } from "../common/entity-type.model";
import { Constructor } from "./constructor.model";
import { Driver } from "./driver.model";
import { EntityMetadata } from "./metadata.model";

export interface DriverStanding {
    position: string;
    positionText: string;
    points: string;
    wins: string;
    Driver: Driver;
    Constructors: Constructor[];
}

export interface DriverStandingEntity {
    season: string;
    round: string;
    DriverStandings: DriverStanding[];
}

export type DriverStandings = {
    [EntityType.STANDING_LISTS]: DriverStandingEntity[]
} & EntityMetadata & {
    season?: string,
    round?: string,
    driverId?: string
    driverStandings?: string
}