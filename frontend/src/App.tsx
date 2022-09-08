import NotificationButton from "./components/NotificationButton";

function App() {
  return (
    <>
      <h1>HELLO!</h1>
      <NotificationButton />
    </>
  );
}

export default App;

// As tags <></> são chamadas fragment. Isso é necessário porque o componente react não pode exportar mais de uma tag.
// Quando tem mais de uma tag, coloca-se os componentes dentro do fragment.