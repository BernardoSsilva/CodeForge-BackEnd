import { UserEntity } from "../../../../app/entities/user.entity"
import { UserInMemoryRepository } from "../../../../../test/helpers/user-in-memory.repository"
import { CreateUserUseCase } from "../create-user.use-case"

describe("Create users unit tests",() =>{

    const userRepository = new UserInMemoryRepository()
    const createUser = new CreateUserUseCase(userRepository)
    it("Should be able to create a new user in repository", () =>{
        const newUser = new UserEntity({
            createdAt: new Date(),
            userEmail: "testEmail",
            userLogin:"testLogin",
            userPassword:"testPassword",
            userName:"testName"
        })

        createUser.execute(newUser)
        expect(userRepository.users).toHaveLength(1)
    })
})