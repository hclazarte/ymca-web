import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center px-4">
        <section
          className="card max-w-xl px-6 py-8 text-center"
          aria-labelledby="title"
        >
          <div className="logo mb-2">YMCA</div>

          <h1 id="title" className="text-2xl font-semibold mb-2">
            Página en construcción
          </h1>

          <p className="tag mb-4">
            Dominio oficial: <strong>ymca.org.bo</strong>
          </p>

          <p className="mb-4">
            Este dominio pertenece oficialmente a la{" "}
            <strong>YMCA La Paz</strong> —{" "}
            <strong>Asociación Cristiana de Jóvenes de La Paz (YMCA-LP)</strong>
            , organización sin fines de lucro.
          </p>

          <div className="divider my-4" />

          <p className="mb-2">
            Mientras preparamos nuestro nuevo sitio web, puedes contactarnos en:
          </p>

          <p className="mb-4">
            Correo: <a href="mailto:ymcalapaz@gmail.com">ymcalapaz@gmail.com</a>{" "}
            |{" "}
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}
