import { CommentsInMemoryRepository } from "../../../../../test/helpers/comments-in-memory-repository";
import { CommentEntity } from '../../../../app/entities/comment.entity';
import { GetCommentByIdUseCase } from "../get-comment-by-id.use-case";

describe("Get all users use cases unit tests", () =>{
    const commentRepository = new CommentsInMemoryRepository()
    const getCommentById = new GetCommentByIdUseCase(commentRepository);

    it("Should throw an error if has no comments", () =>{
        expect(async () => await getCommentById.execute("")).rejects.toThrow()

    })

    it("Should be able to find all comments",async () =>{
        const newComment = new CommentEntity({
            content: "testContent",
            createdAt: new Date(),
            postId: "testId",
            userId: "testId",
            tittle: "testTittle"
        })

        await commentRepository.postComment(newComment)

        const result = await getCommentById.execute(newComment.id)
        expect(result).toBeDefined       
        expect(result).toEqual(commentRepository.comments[0])

    })
})