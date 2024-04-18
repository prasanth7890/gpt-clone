import { redirect } from "next/navigation";

export default async function Signup() {
    async function handleSubmit(formData:FormData) {
        'use server'
        const email = formData.get('email');
        const password = formData.get('password');

        const response = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            body: JSON.stringify({email: email, password: password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const {success, msg} = await response.json();

        console.log(msg);

        if(success) {
            redirect('/signin');
        }
    }

    return(
        <div>
            <form action={handleSubmit}>
                <input type="text" placeholder="Email..." name="email"/>
                <input type="text" placeholder="Password" name="password"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}