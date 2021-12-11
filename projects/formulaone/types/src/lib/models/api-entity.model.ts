import { EntityType } from "../common/entity-type.model";

export interface ApiEntityModel<T> {
    MRData: T;
}

export type ApiEntity<T> = ApiEntityModel<T> & {
    type: EntityType
}