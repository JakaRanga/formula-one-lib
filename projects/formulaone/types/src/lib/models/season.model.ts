import { EntityType } from "../common/entity-type.model";
import { EntityMetadata } from "../models/metadata.model";

export interface Season {
    url: string;
    season: string;
}

export type Seasons = {
    [EntityType.DRIVERS]: Season[]
} & EntityMetadata