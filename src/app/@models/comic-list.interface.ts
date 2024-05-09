import { ComicSummary } from "./comic-summary.interface";

export interface ComicList {
    available?: number;
    returned?: number;
    collectionURI?: string;
    items?: Array<ComicSummary>;
}