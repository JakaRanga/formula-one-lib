import { EntityType } from "../common/entity-type.model";
import { EntityMetadata } from "./metadata.model";

export interface Driver {
    driverId: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;
    code: string;
    permanantNumber: string;
}

export type Drivers = {
    [EntityType.DRIVERS]: Driver[]
} & EntityMetadata & {
    driverId?: string
}