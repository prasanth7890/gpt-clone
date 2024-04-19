import Button from "@/components/Button";

export default function Home() {


  return (
    <div>
      <h2>GPT CLONE</h2>
      <button>LOGIN</button>
      <button>SIGNUP</button>
      <Button outline={true} >login</Button>
      <Button outline={false} >login</Button>
    </div>
  );
}
