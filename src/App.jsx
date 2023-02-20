import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/containers/ItemListContainer';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Cart from './components/Cart';
import ItemDetailsContainer from './components/containers/ItemDetailsContainer'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes >
          <Route exact path='/' element={<Welcome />} />
          <Route exact path='/catalogo' element={<ItemListContainer />} />
          <Route exact path='/category/:category' element={<ItemListContainer />} />
          <Route exact path='/item/:id' element={<ItemDetailsContainer />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;