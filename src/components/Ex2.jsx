// Ex2 — Flexbox básico

// Crie um container com `flex` que alinhe três quadrados coloridos (50x50px) lado a lado e centralizados horizontalmente.

export default function Ex2() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex2 - Flexbox Básico</h1>
      {/*  Container */}
      <div className="flex flex-row items-center justify-center">
        <div className="bg-red-700 h-12.5 w-12.5 m-4"></div>
        <div className="bg-blue-700 h-12.5 w-12.5 m-4"></div>
        <div className="bg-yellow-700 h-12.5 w-12.5 m-4"></div>
      </div>
      
    </div>
  );
}
