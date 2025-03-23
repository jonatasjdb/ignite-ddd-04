import { expect, test } from "vitest";
import { CreateUseCase } from "./create-user";

test('Create User', () => {
    const user = new CreateUseCase()

    const newUser = user.execute({userId: '1', userName: 'JD', userPassword: '123456'})

    expect(newUser.password).toEqual('123456')
})