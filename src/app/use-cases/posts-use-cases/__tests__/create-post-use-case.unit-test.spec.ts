import { PostsInMemoryRepository } from "../../../../../test/helpers/post-in-memory.repository";
import { CreatePostUseCase } from "../create-post.use-case";


describe("Create Post use case unit tests",() =>{
    const repository = new PostsInMemoryRepository();
    const createPost = new CreatePostUseCase(repository)
})