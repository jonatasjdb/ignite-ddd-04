import { User } from "../entities/user"

interface CreateUserUseCaseRequest {
    userId: string
    userName: string
    userPassword: string
}

export class CreateUseCase {
    execute({userId, userName, userPassword}: CreateUserUseCaseRequest) {
        const user =  new User(userId, userName, userPassword)

        return user
    }
}