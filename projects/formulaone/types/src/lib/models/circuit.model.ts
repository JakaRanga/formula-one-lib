import { EntityType } from "../common/entity-type.model";
import { EntityMetadata } from "./metadata.model";

export interface Localisation {
    lat: string;
    long: string;
    locality: string;
    country: string;
}

export interface Circuit {
    circuitId: string;
    url: string;
    circuitName: string;
    location: Localisation;
}

export type Circuits = {
    [EntityType.CIRCUITS]: Circuit[]
} & EntityMetadata & {
    circuitId?: string
}