import { Provider } from "react-redux";
import { store } from "../state";
import RepositoriesList from "./RepositoriesList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>패키지 검색</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
}

export default App;
