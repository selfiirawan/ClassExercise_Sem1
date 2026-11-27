const SessionStorageExample = () => {
  const fruitsArray = ["apple", "mango", "banana"];

  // Set item in session storage
  sessionStorage.setItem("username", "JohnDoe");
  sessionStorage.setItem("age", 43); // number
  sessionStorage.setItem("isMalaysian", true); // boolean
  sessionStorage.setItem("fruits", JSON.stringify(fruitsArray)); // array

  // try to get a non-existent item
  const nonExistentItem = sessionStorage.getItem("nonExistentKey");

  sessionStorage.removeItem("username");
  sessionStorage.clear();

  // Get item from session storage
  const username = sessionStorage.getItem("username");
  const age = sessionStorage.getItem("age"); // become string
  const isMalaysian = sessionStorage.getItem("isMalaysian"); // become string
  const storedFruits = sessionStorage.getItem("fruits"); // become JSON string

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

export default SessionStorageExample;
