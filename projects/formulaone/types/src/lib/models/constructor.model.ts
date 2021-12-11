import { EntityType } from "../common/entity-type.model";
import { EntityMetadata } from "./metadata.model";

export interface Constructor {
    constructorId: string;
    url: string;
    name: string;
    nationality: string;
}

export type Constructors = {
    [EntityType.CONSTRUCTORS]: Constructor[]
} & EntityMetadata & {
    constructorId?: string
}