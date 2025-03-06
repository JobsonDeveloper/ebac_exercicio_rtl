import Post from "./components/Post";

import styles from './App.module.css';
import { Provider } from "react-redux";
import { configuracaoStore } from "./store/sotre";
const store = configuracaoStore()

function App() {
  return (
    <Provider store={store}>
      <div className={styles.app}>
      <Post imageUrl="https://www.orangeboxminiaturas.com.br/img/products/batmovel-1989-figura-batman-em-metal-jada-toys-1-24-jad-98260_1_1000.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
    </Provider>
  );
}

export default App;
