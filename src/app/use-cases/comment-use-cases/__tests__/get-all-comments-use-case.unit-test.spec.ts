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
            commentContent: "testContent",
            createdAt: new Date(),
            commentAuthor: "testId",
            publication: "testId",
            commentTitle: "testtitle"
        })

        await commentRepository.postComment(newComment)

        const result = await getAllComments.execute();

        expect(commentRepository.comments).toHaveLength(1)
        expect(commentRepository.comments[0].id).toEqual(result[0].id)
        expect(commentRepository.comments[0].commentContent).toEqual(result[0].commentContent)
        expect(commentRepository.comments[0].publication).toEqual(result[0].publication)
        expect(commentRepository.comments[0].commentTitle).toEqual(result[0].commentTitle)
        expect(commentRepository.comments[0].commentAuthor).toEqual(result[0].commentAuthor)
        expect(result[0].createdAt).toBeInstanceOf(Date)
    })
})