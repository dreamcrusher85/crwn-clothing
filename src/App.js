import { Route, Routes } from 'react-router-dom';

import Home from './Routes/home/home.component';

import Navigation from './Routes/navigation/navigation.component';

import SignIn from './Routes/signin/signin.component';

const Shop = () => {
  return (
    <h1>I am the shop page</h1>
  )
}


const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />}/> 
        <Route path='sign-in' element={<SignIn />}/>        
      </Route>      
    </Routes>
  );   
}

export default App;
