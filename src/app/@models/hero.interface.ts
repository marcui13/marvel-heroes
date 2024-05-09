import { Image } from "./image.interface";
import { ComicList } from "./comic-list.interface";
import { StoryList } from "./story-list.interface";
import { SeriesList } from "./series-list.interface";
import { EventList } from "./event-list.interface";

export interface Hero {
    id?: number;
    name?: string;
    description?: string;
    modified?: Date;
    resourceURI?: string;
    urls?: Array<{
        type: string;
        url: string;
    }>;
    thumbnail?: Image;
    comics?: ComicList;
    stories?: StoryList;
    events?: EventList;
    series?: SeriesList;
}
