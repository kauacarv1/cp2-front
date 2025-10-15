// Ex4 — Card responsivo

// Crie um card com título, texto e botão. O card deve ter largura fixa em telas grandes (24rem) e ocupar `100%` em dispositivos móveis.

export default function Ex4() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex4 - Card Responsivo</h1>
      {/* Resolva aqui */}
        <div className="bg-amber-300 flex flex-col items-center  p-6 rounded w-auto md:w-96">
          <h3 className="font-semibold mb-2 col-span-2">Card 1</h3>
          <p className="font-semibold mb-2">texto do card</p>
          <button>Saiba mais</button>
        </div>
      </div>
  );
}