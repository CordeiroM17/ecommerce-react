import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/containers/ItemListContainer';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Cart from './components/Cart';
import ItemDetailsContainer from './components/containers/ItemDetailsContainer'
import ShoppingCartContext from './context/ShoppingCartContext';

const App = () => {

  return (
    <ShoppingCartContext>
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
    </ShoppingCartContext>
  )
};

export default App;