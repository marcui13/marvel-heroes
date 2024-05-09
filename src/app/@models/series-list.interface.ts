import { SeriesSummary } from "./series-summary.interface";

export interface SeriesList {
    available?: number;
    returned?: number;
    collectionURI?: string;
    items ?: Array<SeriesSummary>;
}