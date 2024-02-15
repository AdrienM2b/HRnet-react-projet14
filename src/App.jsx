import './App.css';
import EmployeeList from './views/EmployeeList';
import Home from './views/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/employee-list' element={<EmployeeList />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
