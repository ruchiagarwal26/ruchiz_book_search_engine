import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
//import { ApolloProvider } from "@apollo/client";
//import ApolloClient from "apollo-boost";


const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },

  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
       <Router>
       <>
         <Navbar />
         <Routes>
           <Route 
             path='/' 
             element={<SearchBooks />} 
           />
           <Route 
             path='/saved' 
             element={<SavedBooks />} 
           />
           <Route 
             path='*'
             element={<h1 className='display-2'>Wrong page!</h1>}
             //render={() => <h1 className='display-2'>Wrong page!</h1>} 
           />
         </Routes>
       </>
     </Router>
    </ApolloProvider>
  );
}

export default App;

