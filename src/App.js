import "./styles.css";
import Nav from "./components/Nav";
import { Header } from "./components/Header";
import { Article } from "./components/Article";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
export default function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Article />
      <Team />
      <Contact />
    </div>
  );
}
