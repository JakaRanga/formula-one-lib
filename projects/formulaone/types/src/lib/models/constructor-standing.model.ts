import { EntityType } from "../common/entity-type.model";
import { Constructor } from "./constructor.model";
import { EntityMetadata } from "./metadata.model";

export interface ConstructorStanding {
    position: string;
    positionText: string;
    points: string;
    wins: string;
    Constructor: Constructor;
}

export interface ConstructorStandingEntity {
    season: string;
    round: string;
    ConstructorStandings: ConstructorStanding[];
}

export type ConstructorStandings = {
    [EntityType.STANDING_LISTS]: ConstructorStandingEntity[]
} & EntityMetadata & {
    season?: string,
    round?: string,
    constructorId?: string
    constructorStandings?: string
}