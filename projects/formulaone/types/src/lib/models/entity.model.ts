import { EntityBaseType } from "../common/entity-base.model";

export interface EntityBase {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
}

export type Entity<T> = EntityBase & {
    [key in EntityBaseType]: T
}