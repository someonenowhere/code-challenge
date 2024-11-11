import { Provider} from 'react-redux';
import store from './store/store';
import PokemonList from './PokemonList';

// const api = "https://pokeapi.co/api/v2/pokemon?limit=151"
/**
 * Question 1: How did you manage to fetch the list and what tool did you use?
   Answer : To fetch the list of Pokémon, I used the axios library, which is a popular tool for making HTTP requests. Specifically, I used the
   axios.get() method to send a GET request to the Pokémon API, which returns a list of Pokémon in JSON format.

 * Question 2: What steps would you take to future improve this?
   Answer : To future improve this code, I would take the following steps:
   Implement error handling: While I've added some basic error handling using try/catch blocks, I could improve this by providing more specific error messages and handling different types of errors (e.g., network errors, API errors).
   Add caching: To improve performance, I could implement caching using a library like react-query. 
 
 * Question 4: What makes the createSlice in redux-toolkit different than a Reducer in redux?
   Answer : createSlice from Redux Toolkit is a higher-order function that simplifies the process of creating a reducer. 
   It generates a slice of state, including the reducer function, actions, and action creators, all in one step. 

  * Question 5: Describe the benefits of immutable code.
    Answer : In the context of Redux, immutable code ensures that the state of the application remains consistent and predictable, making it easier to manage and debug the application.
  
  * Question 6: How can you verify the action has been dispatched?
    Answer : This can be acieved Console logging, Use the Redux DevTools, Use a middleware, Use the useDispatch hook with a callback, Use a testing library 

  * Question 7: explain the use of useEffect hook in React
    Answer : The useEffect hook in React is a powerful tool for managing side effects in functional components. It allows you to perform actions after rendering, such as making API calls, updating the DOM, or setting timers.

  * Question 8: What is A High Order Component?
    Answer : A High-Order Component (HOC) is a function that takes a component as an argument and returns a new component with additional props or behavior. HOCs are a powerful tool in React for reusing code, managing state, and abstracting away complexity.

  * Question 9: What use cases would a HOC be usefull? 
    Answer : HOC's can be used in Authentication, Error Handling, Loading States, API Requests, Analytics, Internationalization

  * Question 10: Question 10: What does it indicate when a component is prefixed with use and with
    Answer : In React, the use and with prefixes are used to indicate different types of components.
    Components prefixed with "use" are hooks. Components prefixed with "with" are Higher Oreder Components (HOCs).

  * Question 11: What is a Generic type in typescript?
    Answer : In TypeScript, a generic type is a type that can work with any data type. It's a way to define a type that can be used with multiple types, without having to create a separate type for each one.

  * Question 12: Whats the difference between a controlled and uncontrolled input in React?
    Answer : In React, inputs can be either controlled or uncontrolled.
    A controlled input is a React input element where the value is controlled by the parent component. 
    The parent component manages the value of the input, and the input element reflects the current value.
    An uncontrolled input is a React input element where the value is not controlled by the parent component. 
    The input element manages its own value, and the parent component has no control over it. 
*/

const App = () => {
  return (
    <Provider store={store}>
      <h1>Pokemon list:</h1>
      <PokemonList />
    </Provider>
  )
}

export default App;
