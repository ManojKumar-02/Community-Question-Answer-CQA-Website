import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from './components/Body'
import Question from './components/Question';
import Register from './components/Register';
import Login_page from './components/Login_page';
import ViewQuestion from './components/ViewQuestion';
import Header from './components/Header';

function App() {

  return (
    <BrowserRouter>
    <Header />
      <div className="App">
        <Routes >
          <Route path='/home' element={<Body />} />
          <Route path='/addQuestion' element={<Question />} />
          <Route path='/viewQuestion' element={<ViewQuestion />} />
          <Route path='/' element={<Login_page />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
