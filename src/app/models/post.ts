import { User } from "./user";

export class Post{
    constructor(
        public description: String,
        public short_description: String,
        public date: Date,
        public category: String,
        public user: User
    ){}
}