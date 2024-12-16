import { useSelector , useDispatch} from 'react-redux'
import './App.css';
import { addTOCart } from './Store/Slices/Cart';
function App() {
  const cart = useSelector((state)=> console.log(state.cart));
  const dispatch = useDispatch();
  return (
   
    <>
      <h1> Wel Come to redux</h1>

      <button onClick={()=>{dispatch(addTOCart({name:'Sanyuta - 2.0'}))}}>Add</button>
    </>
  );
}

export default App;
