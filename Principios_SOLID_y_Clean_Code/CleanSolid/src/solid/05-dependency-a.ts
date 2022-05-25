import { PostService } from './05-dependency-b';
import { JsonDataBaseService, LocalDataBaseService } from './05-dependency-c';


// Main
(async () => {

    //datos locales
    //const provider = new LocalDataBaseService();

    //datos del json
    const provider = new JsonDataBaseService();


    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();
