import NavBar from "./layoutcomponents/NavBar";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Footer from "./layoutcomponents/Footer";
import MyAccount from "./Landingcomponents/MyAccount";
import Landingpage from "./Landingcomponents/Landingpage";
import CreateAccount from "./Landingcomponents/CreateAccount";
import Aboutus from "./Landingcomponents/Aboutus";
import Contactus from "./Landingcomponents/Contactus";
import TandC from "./Landingcomponents/TandC";
import Reviews from "./Landingcomponents/Reviews";
import MyCart from "./Landingcomponents/myCart";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductPage from "./Landingcomponents/ProductPage";


function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path= "/" exact element = {<Landingpage/>}/>
        <Route path= "/myaccount" exact element = {<MyAccount/>}/>
        <Route path= "/createaccount" exact element = {<CreateAccount/>}/>
        <Route path= "/aboutus" exact element = {<Aboutus/>}/>
        <Route path= "/contactus" exact element = {<Contactus/>}/>
        <Route path= "/terms" exact element = {<TandC/>}/>
        <Route path= "/reviews" exact element = {<Reviews/>}/>
        <Route path= "/Cart" exact element = {<MyCart/>}/>
        <Route path= "/Product" exact element = {<ProductPage/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
