export async function Login(formData: FormData) {
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    }
  
    const response = await fetch("http://localhost:5000/signin", {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    const res = await response.json();
    console.log(res);
  }