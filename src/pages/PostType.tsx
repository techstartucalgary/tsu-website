export class PostType {
  author!: number;
  date_posted!: string;
  id!: number;
  post_description!: string;
  title!: string;

  constructor(eventResponse: any) {
    this.author = eventResponse.author;
    this.date_posted = eventResponse.date_posted;
    this.id = eventResponse.id;
    this.post_description = eventResponse.post_description;
    this.title = eventResponse.title;
  }
}
