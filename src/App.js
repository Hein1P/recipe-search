import './App.css';
import {useEffect, useState} from "react";
import {RecipeList} from "./components/RecipeList";
import {Container, Grid} from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import {Searchbar} from "./components/Searchbar";
const app = process.env.REACT_APP_ID;
const key = process.env.REACT_APP_KEY;
function App() {
  const [data,setData] = useState(null)
    const [name,setName] = useState('');
  const url = `https://api.edamam.com/search?q=${name}&app_id=${app}&app_key=${key}`
    const handleName=(e)=>{
      console.log("E",e)
      setName(e)
    }
    const searchRecipe=()=>{
        fetch(url)
            .then(data=>data.json())
            .then(data=>setData(data.hits))
            .catch(error=>{throw(error)})
        setName('')
    }
  return (
    <Container maxWidth="lg">
        <Searchbar handleName={handleName} name={name} searchRecipe={searchRecipe}/>
      <Grid container spacing={2}>
          {data? data.map((item)=>{
              const id = uuidv4()
          return(
                  <RecipeList item={item} key={id}/>
          )})
          : null}

      </Grid>
    </Container>

  );
}

export default App;
