import { EntityType } from "../common/entity-type.model";
import { EntityMetadata } from "../models/metadata.model";
import { Circuit } from "./circuit.model";

export interface Schedule {
    season: string;
    round: string;
    url: string;
    raceName: string;
    circuit: Circuit;
    date: string;
    time: string;
}

export type SeasonSchedule = {
    [EntityType.RACES]: Schedule[]
} & EntityMetadata
