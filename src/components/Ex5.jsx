// Ex5 — Navbar responsiva

// Crie uma barra de navegação horizontal com 3 links.

// - Em telas grandes, os links devem aparecer em linha.
// - Em telas pequenas, os links devem aparecer empilhados.

export default function Ex5() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex5 - Navbar Responsiva</h1>
      {/* Resolva aqui */}
      <header>
      <nav className="flex flex-col items-center  md:flex-row md:items-center md:justify-center">
          <ul className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 p-4">
            <li className=""><a href="#">Home</a></li>
            <li>
              <a href="#">About</a>
              </li>
            <li>
              <a href="#">Contato</a>
              </li>
          </ul>
      </nav>
      </header>
    </div>
  );
}