import './App.css';
import Person from './components/Person.js';

function App() {
  return (
    <div className="App">
        <Person 
            lastName={"Doe"}    
            firstName={"Jane"}
            age={"45"}
            hairColor={"Black"}
                />
        <Person 
            lastName={"Smith"}    
            firstName={"John"}
            age={"88"}
            hairColor={"Brown"}
                />
        <Person 
            lastName={"Jane"}    
            firstName={"Mary"}
            age={"23"}
            hairColor={"Red"}
                />
        <Person 
            lastName={"Parker"}    
            firstName={"Peter"}
            age={"24"}
            hairColor={"Brown"}
                />

    </div>
  );
}

export default App;
