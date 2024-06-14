import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/slices/api';
import { updateEntity } from './redux/slices/products';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {

  const [IsLogin,setIsLogin] = useState(false);

  const apiData = useSelector(state => state.api);
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  console.log('apiData', apiData)
  // dispatch(updateEntity(apiData.data))
  console.log('products', products)


  // let API_URL = 'https://fakestoreapi.com/products';

  let config = {
    API_URL:'https://fakestoreapi.com/products',
    update:updateEntity
  }


  useEffect( () => { 
    
    const fetchDataAndDispatch = async () => {

    let fetching = await dispatch(fetchData(config))
    console.log('fetching', fetching)
    // console.log('apiData', apiData)
    // dispatch(updateEntity(apiData.data))
  }
  fetchDataAndDispatch();

  },[])

  // if(apiData.status === 'loading'){
  //   return <p>Loading...</p>
  // }

  return (
    <div className="">
      <Header IsLogin={IsLogin} setIsLogin={setIsLogin}/>
      {
        apiData.status === 'loading'? 
          (<p>Loading...</p>) : 
            apiData.status === 'error' ? 
              (<p>{apiData.error}</p> ): 
                (<p>{products.entities[0].id}</p>)
      }


      <div>
        <Outlet context={[setIsLogin]}/>
      </div>

    </div>
  );
}

export default App;
