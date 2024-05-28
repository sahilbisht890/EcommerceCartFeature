import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main/index'
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from 'react-redux';
import store from './components/store';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Main/>
      </Provider>
      
    </div>
  );
}

export default App;
