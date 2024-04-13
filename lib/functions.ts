'use server'

export async function getData(input: string) {
    const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({prompt: input}),
    });

    const { msg } = await response.json();
    return msg;
}