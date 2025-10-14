// Ex1 — Botão estilizado com Tailwind

// Crie um botão centralizado com a cor azul, texto branco, padding, bordas arredondadas e efeito `hover` para escurecer a cor.

export default function Ex1() {
  return (
    <div className="flex flex-col items-center my-8">
        <h1 className="text-2xl font-bold mb-4">Ex1 - Botão Estilizado</h1>
        <button className=" bg-blue-500 text-white p-4 rounded-xl hover:bg-blue-800 ">Botão exercicio 1</button>
    </div>
  );
}