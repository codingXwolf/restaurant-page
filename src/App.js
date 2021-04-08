import "./App.css";
import Head from "./components/Head";
import Foot from "./components/Foot";
import Contents from './components/Contents'
import { Layout  } from "antd";

function App() {
  return (
    <div className="App">
      <Layout>
        <Head/>
        <Contents/>
        <Foot/>
      </Layout>
    </div>
  );
}

export default App;
