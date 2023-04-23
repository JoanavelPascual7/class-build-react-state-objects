import { dogsData } from "./data";
import { useState } from "react";
import { v1 as generateUniqueID } from "uuid";
import DogDetails from "./DogDetails";

function App() {
  const [dogs, setDogs] = useState(dogsData);

  function addDog() {
    const newDog = {
      id: generateUniqueID(),
      name: "Rover",
      present: false,
      grade: "100",
      notes: "The goodest new dog",
    };
    // add the new dog to the end of the array
    setDogs([...dogs, newDog]);
  }

  function removeDog(dogID) {
    // use the filter method to remove any dogs that have a matching id
    const filteredDogArray = dogs.filter((dog) => dog.id !== dogID);
    // set the dogs array to the new array that will not have the removed dog
    setDogs(filteredDogArray);
  }

  function togglePresent(dogID) {
    const updatedDogs = dogs.map((dog) => {
      if (dog.id === dogID) {
        return { ...dog, present: !dog.present };
      } else {
        return dog;
      }
    });
    setDogs(updatedDogs);
  }

  return (
    <div className="App">
      <header>
        <h1> Bark and Bowl Doggy Day Care</h1>
        <h2>{new Date().toDateString()}</h2>
        <button onClick={addDog}>Add Dog</button>
        <ul>
          {dogs.map((dog) => {
            return (
              <li key={dog.id}>
                <span
                  onClick={() => togglePresent(dog.id)}
                  style={
                    dog.present
                      ? { textDecoration: "none" }
                      : { textDecoration: "line-through" }
                  }
                >
                  {dog.name}{" "}
                </span>
                <button onClick={() => removeDog(dog.id)}>remove</button>
                <button onClick={() => togglePresent(dog.id)}>
                  {dog.present ? "Absent" : "Present"}
                </button>
                <DogDetails dog={dog} />
              </li>
            );
          })}
        </ul>
      </header>
      <aside></aside>
      <main></main>
    </div>
  );
}

export default App;
