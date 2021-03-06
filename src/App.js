import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import {Layout,Typography,Space} from 'antd'
import {Navbar,Exchanges,Homepage,Cryptocurrencies,News} from './components';
import './App.css'
import { Switch } from 'react-router-dom';
function App() {
  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar/>
        </div>
        <div className='main'>
          <Layout>
            <div className='routes'>
              <Switch>
                  <Route exact path='/'>
                      <Homepage/>
                  </Route>
                  <Route exact path='/cryptocurrencies'>
                      <Cryptocurrencies/>
                  </Route>
                  <Route exact path='/news'>
                      <News/>
                  </Route>
                
              </Switch>
            </div>
          </Layout>
       
        <div className='footer'>
             <Typography.Title  level={5} style={{color:"white",textAlign:"center"}}>
               Cryptoverse <br/>
               All right reserved
             </Typography.Title>
             <Space>
               <Link to='/'>Home</Link>
               <Link to='/exchanges'>Exchanges</Link>
               <Link to='/news'>News</Link>
             </Space>
        </div>
        </div>
    </div>
  )
}

export default App
