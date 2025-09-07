
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> Far from Home</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>WHat do you want your master to give you ?</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">LISTEN</div>
}

function Stats() {
  return (
    <footer>
      <em>You have 2 items on this list, and you already packed some X (X%)</em>
    </footer>
  );
}

