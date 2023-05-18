import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import EditProductList from './pages/EditProductList';
import CartPage from './pages/CartPage';
import CartItem from './pages/CartItem';

function App() {
  return (
    <>
       <BrowserRouter>
           <Routes>
             <Route path='/login' Component={Login} />
             <Route path='/register' Component={Register} />
             <Route path='/product-list' Component={ProductList} />
             <Route path='/edit-product-list' Component={EditProductList} />
             <Route path='/cart-page' Component={CartPage} />
             <Route path='/cart-item' Component={CartItem} />

           </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
