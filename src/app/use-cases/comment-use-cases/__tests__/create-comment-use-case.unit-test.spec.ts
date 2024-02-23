import { CommentsInMemoryRepository } from '../../../../../test/helpers/comments-in-memory-repository';
import { CommentEntity } from '../../../../app/entities/comment.entity';
import { CreateCommentUseCase } from '../create-comment.use-case';
describe("Create a new comment use case unit tests",() =>{

    const commentRepository = new CommentsInMemoryRepository()
    const createComment = new CreateCommentUseCase(commentRepository)
    it("Should throw error if send a empty comment",() =>{
        expect(async () => await createComment.execute(null)).rejects.toThrow();
    })

    it("Should be able to create a new comment", async () =>{
        const newComment = new CommentEntity({
            content: "testContent",
            createdAt: new Date(),
            postId: "testId",
            userId: "testId",
            tittle: "testTittle"
        })

        await createComment.execute(newComment)

        expect(commentRepository.comments[0]).toBeDefined()
        expect(commentRepository.comments[0].id).toEqual(newComment.id)
        expect(commentRepository.comments[0].content).toEqual(newComment.content)
        expect(commentRepository.comments[0].postId).toEqual(newComment.postId)
        expect(commentRepository.comments[0].userId).toEqual(newComment.userId)
        expect(commentRepository.comments[0].tittle).toEqual(newComment.tittle)
        expect(commentRepository.comments[0].createdAt).toBeInstanceOf(Date)
    })
})