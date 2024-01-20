// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginPage';
import Frontpage from './components/frontpage';
import Cards from './components/card';
import DownNav from './components/downNav';
import Emailbutton from './components/email';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/frontpage" element={<Frontpage />} />
        <Route path="/men" element={<Cards />} />
        <Route path="/women" element={<Cards />} />
        <Route path="/newyear" element={<Cards />} />
        <Route path="/email" element={<Emailbutton />} />
        <Route path="/cards"element={  <> 
        <Cards />
              <DownNav />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
