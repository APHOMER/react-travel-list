//  PDA => Is an account without Private Key.

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Shoe", quantity: 1, packed: false },
];



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
  return <h1>❤️Far from Home💕</h1>;
}

function Form() {
  return (
    <form className="add-form">
      <h3>WHat do you want your master to give you👌?</h3>
      <select>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <input type="text" placeholder="Item..."/>
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>X</button>
    </li>
  ); 
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have 2 items on this list, and you already packed some X (X%)</em>
    </footer>
  );
}



