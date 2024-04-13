export type chatHistoryType = {
    role: string,
    message: string
}

const Data : chatHistoryType[] = [
    {
        role: 'user',
        message: 'Hi GPT, Nice to meet you.'
    },
    {
        role: 'model',
        message: 'Hey, How can I help you?'
    },
    {
        role: 'user',
        message: 'How many planet are there in our solar system?'
    },
    {
        role: 'model',
        message: 'There are 7 planets'
    }
];


export default Data;