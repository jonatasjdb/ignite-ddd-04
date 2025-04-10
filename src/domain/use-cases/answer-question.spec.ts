import { AnswerQuestionUseCase } from './answer-question'
import { AnswersRepository } from '../respositories/answers-repository'
import { Answer } from '../entities/answer';

const fakeAnswersRepository: AnswersRepository = {
    create: async (answer: Answer) => {
        return;
    }
}

test('create an answer', async () => {
    const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

    const answer = await answerQuestion.execute({
        instructorId: '1',
        questionId: '2',
        content: 'Nova resposta',
    })

    expect(answer.content).toEqual('Nova resposta')
})