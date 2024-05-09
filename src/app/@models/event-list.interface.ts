import { EventSummary } from "./event-summary.interface";

export interface EventList {
    available?: string;
    returned?: string;
    collectionURI?: string;
    items?: Array<EventSummary>;
}