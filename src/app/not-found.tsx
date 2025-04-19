import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-between p-10">
      <h1 className="text-3xl font-bold">Página não encontrada</h1>
      <p className="text-lg">Desculpe, a página que você está procurando não existe.</p>
      <Link href='/' className="text-blue-900 font-semibold mt-3 hover:text-black">Voltar para página inicial</Link>
      <Image 
        src="/images/404notfound.png"
        alt="Not found"
        width={400}
        height={420}
        className="mt-8"/>
    </main>
  );
}