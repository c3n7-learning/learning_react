import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Learn NextJS on top of this" />
      <Todo text="Add React Router or Redux state management" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
