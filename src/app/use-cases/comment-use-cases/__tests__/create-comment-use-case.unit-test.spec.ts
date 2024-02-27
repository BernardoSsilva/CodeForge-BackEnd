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
            commentContent: "testContent",
            createdAt: new Date(),
            commentAuthor: "testId",
            publication: "testId",
            commentTitle: "testtitle"
        })

        await createComment.execute(newComment)
        newComment.id = commentRepository.comments[0].id

        expect(commentRepository.comments[0]).toBeDefined()
        expect(commentRepository.comments[0].id).toEqual(newComment.id)
        expect(commentRepository.comments[0].commentContent).toEqual(newComment.commentContent)
        expect(commentRepository.comments[0].publication).toEqual(newComment.publication)
        expect(commentRepository.comments[0].commentAuthor).toEqual(newComment.commentAuthor)
        expect(commentRepository.comments[0].commentTitle).toEqual(newComment.commentTitle)
        expect(commentRepository.comments[0].createdAt).toBeInstanceOf(Date)
    })
})