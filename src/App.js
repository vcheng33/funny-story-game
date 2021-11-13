import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import Header from "./Header";
import MadlibsApp from "./MadlibsApp";


/** Site application.
 *
 *  App -> MadlibsApp
 */

function App() {
  return (
    <main className="App">
      <Header />
      <section className="container mt-4">
        <MadlibsApp />
      </section>
    </main>
  );
}

export default App;
