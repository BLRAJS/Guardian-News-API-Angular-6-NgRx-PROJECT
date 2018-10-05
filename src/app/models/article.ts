/** Interface for mapping article who caim from theguardian API */
export interface Article {
    id: string;
    webTitle: string;
    webPublicationDate: Date;
    body: string;
    byline: string;
    thumbnail: string;
}
