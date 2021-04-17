import './App.css';
import ColumnLeft from './components/ColumnLeft';
import ColumnRight from './components/ColumnRight';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="columns">
        <ColumnLeft />
        <ColumnRight />
      </div>
    </div>

  );
}

export default App;
