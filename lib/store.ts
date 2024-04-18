import {atom} from 'recoil';

export const chatState = atom({
    key: 'chatState',
    default: []
});

export const chatId = atom({
    key: 'chatId',
    default: "",
})