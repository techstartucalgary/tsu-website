export class EventType {
  category!: number;
  date_published!: string;
  id!: number;
  news_description!: string;
  source!: string;
  title!: string;
  url!: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(eventResponse: any) {
    this.category = eventResponse.category;
    this.date_published = eventResponse.date_published;
    this.id = eventResponse.id;
    this.news_description = eventResponse.news_description;
    this.source = eventResponse.source;
    this.title = eventResponse.title;
    this.url = eventResponse.url;
  }
}
