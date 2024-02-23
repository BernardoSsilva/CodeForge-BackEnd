import { UserEntity } from "../../../entities/user.entity"
import { UserInMemoryRepository } from "../../../../../test/helpers/user-in-memory.repository"
import { FindUserByIdUseCase } from "../find-user-by-id.use-case"

describe("Find user by id use case unit tests", () =>{

    const repository = new UserInMemoryRepository()
    const findUserById = new FindUserByIdUseCase(repository)
    it("Should throw an error if user is not found", () =>{
        expect(() => findUserById.execute("")).rejects.toThrow()
    })

    it("Should be able to find a user by id", async () =>{
        const newUser = new UserEntity({
            userName:"testName",
            userLogin:"testLogin",
            userEmail:"test@email",
            userPassword:"testPassword",
            createdAt:new Date()
        })

        repository.users = [newUser]

        const result = await findUserById.execute(newUser.id)

        expect(result).toBeDefined()
        expect(result.id).toEqual(newUser.id)
    })
})