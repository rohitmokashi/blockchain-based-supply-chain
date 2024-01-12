import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ethers } from "ethers";
import abi from "./contractJson/Supplychain.json";

import NavBar from './components/NavBar/NavBar';
import DisplayProducts from './components/DisplayProducts/DisplayProducts';
import AddProduct from './components/AddProduct/AddProduct';
import AddWorker from './components/Worker/AddWorker';
import DisplayWorkers from './components/Worker/DisplayWorkers';
import DisplayData from './components/DisplayData/DisplayData';
import AddStatus from './components/AddStatus/AddStatus';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  })

  const [account, setAccount] = useState('Not Connected');

  useEffect(() => {
    const template = async()=>{
      // const contractAddress = "0xDef44Ee4e1727cd8a09B9454B610C9f2283D3c1f"; // Goerli
      // const contractAddress = "0xc9BEA07E55Ac351401B2C8Ce086fbF74D58e1F63"; // Polygon
      const contractAddress = "0x1D198BC319799bd3F518b4D669eab96f562a32f2"; // Polygon New
      const contractABI = abi.abi;
      
      try{
        const { ethereum } = window;
        const account = await ethereum.request({
          method: "eth_requestAccounts"
        })

        // window.ethereum("accountsChanged", ()=>{
        //   window.location.reload();
        // })
        setAccount(account);
  
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
  
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        )
        // console.log(contract);
        setState({provider, signer, contract});
      } catch(error) {
        alert(error);
      }
    }

    template();
  }, [])


  return (
    <div>
      {/* Connected Account: {account} */}
      <NavBar />
      
      <div>
        <Routes>
          <Route path='/' element={<div>Blockchain Based Supply Chain</div>} />
          <Route path='/add-product' element={<AddProduct state={state} />} />
          <Route path='/display-products' element={<DisplayProducts state={state} />} />
          <Route path='/worker' element={<div><AddWorker state={state} /> <DisplayWorkers state={state} /></div>} />
          <Route path='/add-status' element={<AddStatus state={state} />} />
          <Route path='/display-status' element={<DisplayData state={state} />} />
        </Routes>
      </div>
      {/* <DisplayData state={state} /> */}
    </div>
  )
}

export default App;
