const LocalStorageExample = () => {
  const fruitsArray = ["apple", "mango", "banana"];

  // Set item in local storage
  localStorage.setItem("username", "JohnDoe");
  localStorage.setItem("age", 43); // number
  localStorage.setItem("isMalaysian", true); // boolean
  localStorage.setItem("fruits", JSON.stringify(fruitsArray)); // array

  // try to get a non-existent item
  const nonExistentItem = localStorage.getItem("nonExistentKey");

  localStorage.removeItem("username");
  localStorage.clear();

  // Get item from local storage
  const username = localStorage.getItem("username");
  const age = localStorage.getItem("age"); // become string
  const isMalaysian = localStorage.getItem("isMalaysian"); // become string
  const storedFruits = localStorage.getItem("fruits"); // become JSON string

  if (username == null) {
    // logic goes here if user is not logged in
  }

  const convertedIntoArrayFruits = JSON.parse(storedFruits);
  console.log(storedFruits);
  console.log(convertedIntoArrayFruits);

  console.log(typeof age);
  console.log(typeof isMalaysian);

  return (
    <div>
      <p>Username: {username}</p>
      <p>Age: {age} </p>
      <p>Is this Malaysian? : {isMalaysian} </p>
      <p>Non Existent Item: {nonExistentItem}</p>

      <ul>
        {convertedIntoArrayFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default LocalStorageExample;
