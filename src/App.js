import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './views/Welcome';
import Navbar from './components/navbar';
import EntireRecipe from './components/myRecipes/components/entireRecipe';
import RecipeForm from './components/recipeForm';
import './App.css';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Welcome />} />
        <Route path='/new-recipe' element={<RecipeForm />} />
        <Route path='/recipe' element={<EntireRecipe />} />
        <Route path='/update-recipe' element={<RecipeForm />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
