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

        expect(commentRepository.comments).toHaveLength(1)
        expect(commentRepository.comments[0].id).toEqual(newComment.id)
        expect(commentRepository.comments[0].content).toEqual(newComment.content)
        expect(commentRepository.comments[0].postId).toEqual(newComment.postId)
        expect(commentRepository.comments[0].tittle).toEqual(newComment.tittle)
        expect(commentRepository.comments[0].userId).toEqual(newComment.userId)
        expect(commentRepository.comments[0].createdAt).toBeInstanceOf(Date)
    })
})