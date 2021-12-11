import { EntityType } from "../common/entity-type.model";
import { EntityMetadata } from "./metadata.model";

export interface FinishStatusEntity {
    statusId: string;
    count: string;
    status: string;
}

export type FinishStatus = {
    [EntityType.STATUS]: FinishStatusEntity[]
} & EntityMetadata & {
    season?: string,
    round?: string
}