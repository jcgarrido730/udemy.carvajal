import { LocalDataBaseService, JsonDataBaseService } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    //datos locales
    constructor(private postProvider: LocalDataBaseService) {}

    //Inyección de dependencia 
    //constructor(private postProvider: JsonDataBaseService) {}

    async getPosts() {
        //const jsonDB = new LocalDataBaseService();
        //const jsonDB = new JsonDataBaseService();
        //this.posts = await jsonDB.getPosts();
        
        //llamado para nuestros datos locales
        this.posts = await this.postProvider.getFakePosts();

        //llamado datos del json aplicando inyección de dependencias
        //this.posts = await this.postProvider.getPosts();

        return this.posts;
    }
}
