import Header from "./components/Header";
import NotificationButton from "./components/NotificationButton";
import SalesCard from "./components/SalesCard";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

// As tags <></> são chamadas fragment. Isso é necessário porque o componente react não pode exportar mais de uma tag.
// Quando tem mais de uma tag, coloca-se os componentes dentro do fragment.