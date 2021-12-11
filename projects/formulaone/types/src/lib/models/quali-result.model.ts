import { Time } from "@angular/common";
import { EntityType } from "../common/entity-type.model";
import { Circuit } from "./circuit.model";
import { Constructor } from "./constructor.model";
import { Driver } from "./driver.model";
import { EntityMetadata } from "./metadata.model";

export interface QualifyingDetail {
    number: string;
    position: string;
    Driver: Driver;
    Constructor: Constructor;
    Q1: string;
    Q2: string;
    Q3: string;
}

export interface QualifyingResultEntity {
    season: string;
    round: string;
    url: string;
    raceName: string;
    Circuit: Circuit;
    date: string;
    time: string;
    QualifyingResults: QualifyingDetail[];
}

export type QualiResult = {
    [EntityType.RACES]: QualifyingResultEntity[]
} & EntityMetadata