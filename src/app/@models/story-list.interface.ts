import { StorySummary } from "./story-summary.interface";

export interface StoryList {
    available?: string;
    returned?: string;
    collectionURI?: string;
    items?: Array<StorySummary>;
}