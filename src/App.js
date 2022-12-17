import { Header } from "./Components/Header";
import { ItemsList } from "./Components/ItemsList";

const App = () => {
  return (
    <div className="container-fluid p-0">
      <Header />
      <div className="d-flex flex-row">
        <ItemsList />
      </div>
    </div>
  );
};

export default App;
