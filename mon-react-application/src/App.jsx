 
 import store from "./stockage";
 import Enfant from "./Enfant";
 import { Provider } from "react-redux";

export default function App() {

  


  
 

  return (
   <>
   <Provider store={store}>
    <Enfant />

    </Provider>
         
    </>
  );
}
