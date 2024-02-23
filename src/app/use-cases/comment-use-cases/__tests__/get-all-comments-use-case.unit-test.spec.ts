import { CommentsInMemoryRepository } from "../../../../../test/helpers/comments-in-memory-repository"
import { GetAllCommentsUseCase } from "../get-all-comments.use-case"
import { CommentEntity } from '../../../../app/entities/comment.entity';

describe("Get all users use cases unit tests", () =>{
    const commentRepository = new CommentsInMemoryRepository()
    const getAllComments = new GetAllCommentsUseCase(commentRepository);

    it("Should throw an error if has no comments", () =>{
        expect(async () => await getAllComments.execute()).rejects.toThrow()

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

        const result = await getAllComments.execute();

        expect(commentRepository.comments).toHaveLength(1)
        expect(commentRepository.comments[0].id).toEqual(result[0].id)
        expect(commentRepository.comments[0].content).toEqual(result[0].content)
        expect(commentRepository.comments[0].postId).toEqual(result[0].postId)
        expect(commentRepository.comments[0].tittle).toEqual(result[0].tittle)
        expect(commentRepository.comments[0].userId).toEqual(result[0].userId)
        expect(result[0].createdAt).toBeInstanceOf(Date)
    })
})