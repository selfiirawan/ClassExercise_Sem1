const StorageExample = () => {
  // Set items in local storage and session storage
  localStorage.setItem("username", "JohnDoe");
  sessionStorage.setItem("username", "JohnDoe");

  // Get items from local storage and session storage
  const localUsername = localStorage.getItem("username");
  const sessionUsername = sessionStorage.getItem("username");

  return (
    <div>
      <h2>Web Storage Example</h2>
      <p>Local Storage Username: {localUsername}</p>
      <p>Session Storage Username: {sessionUsername}</p>
    </div>
  );
};

export default StorageExample;
