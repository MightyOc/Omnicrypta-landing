import Head from "next/head";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Head>
        <title>Omnicrypta | AI Cyber Army</title>
      </Head>
      <main className="text-center px-6 py-20 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-400 tracking-tight mb-4">
          Omnicrypta: The World’s First AI Cyber Army for the People
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Join the revolution. Enlist your own AI-powered protection force.
        </p>
        <Button className="bg-green-500 text-black hover:bg-green-400 text-lg px-6 py-3 rounded-full shadow-xl">
          Join the First 100 Cyber Army
        </Button>
      </main>
    </div>
  );
}