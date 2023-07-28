
import Header from './Components/Header/Header';
import Search from './Components/Header/Search';
import Home from './Components/Home/Home';
import { Box } from '@mui/material';

import DataProvider from './context/DataProvider';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import DetailView from './Components/details/DetailView';
import Cart from "./Components/cart/Cart";

function App() {
  return (
    <DataProvider>

      <BrowserRouter>
      <Header />

      <Box style={{marginTop:54}}>

          <Routes>
           
            <Route path='/' element={ <Home/>}/>
            <Route path="/product/:id" element={<DetailView />} />
            <Route path="/cart" element={<Cart/>}/> 
           
          </Routes>
      </Box>
      </BrowserRouter>
    </DataProvider>

  );
}

export default App;
