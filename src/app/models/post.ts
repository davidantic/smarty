export class Post{
    id: Number;
    title: string
    description: string
    createdAt: Date

    constructor(data: any) {
        this.id = data.id;
        this.title = data.caption;
        this.description = data.description;
        this.createdAt = data.createdAt;
      }
}