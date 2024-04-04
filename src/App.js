import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Authentication/SignIn';
import Protected from './HOC/ProtectedRoute';
import Layout from './component/Layout';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/layout' element={<Protected Cmp={Layout} />} />
      </Routes>
    </div>
  );
}

export default App;
