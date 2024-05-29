import './App.css';

import Container from './Components/About/Container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BannerContainer from './Components/BannerContainer';
import ServiceContainer from './Components/Service/Container';
import ContactContainer from './Components//contact/Container';
import ProductContainer from './Components/Products/ProductContainer';
import ProductDetails from './Components/productdetails/ProductDetails';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<BannerContainer/>}/>
        <Route path='/about' element={<Container/>}/>
        <Route path='/service' element={<ServiceContainer/>}/>
        <Route path='/contact' element={<ContactContainer/>}/>
        <Route path='/products' element={<ProductContainer/>}/>
        <Route path={`/product-details/:id`} element={<ProductDetails/>}/>

      </Routes>
      </BrowserRouter>
     {/* <Banner/>
     <Service/>
     <Idea/>
     <Projects/>
     <Testimonial/>
     <Footer/> */}
    
    </div>
  );
}

export default App;
