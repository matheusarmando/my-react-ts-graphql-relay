import React, { Component, useState } from "react";
import { Box, TextField } from "@material-ui/core";
import SearchUser from "../../pages/SearchUser";

import "./App.css";

const App = () => {
  const [query, setQuery] = useState('')
  return (
    <Box className="App">
      <Box>
        <h1 className="App-header-title">
          Activity to List User with graphql-react-relay
        </h1>
      </Box>
      <Box className="App-main">
        
        <Box className="App-main-content">
          <Box>
            <TextField
              onChange={(ev) => {
                setQuery(ev.target.value);
              }} 
              value={query}
              id="outlined-search" label="Search field" type="search" variant="outlined" />
          </Box>
          <SearchUser query={query} />
        </Box>
        <Box className="gifEmpty">
              
        </Box>
      </Box>
      <Box className="App-footer">
      </Box>
    </Box>
  );
}

export default App;
