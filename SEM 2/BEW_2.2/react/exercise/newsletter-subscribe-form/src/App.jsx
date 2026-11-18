import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  if (subscribed) {
    return (
      <div>
        <p style={{ color: "green" }}>
          Please check your email ({email}) for confirmation
        </p>
      </div>
    );
  }

  return (
    <>
      <h2>Newsletter Subscription</h2>
      <form>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />

        <input
          type="text"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />

        <button onClick={handleSubscribe}>Subscribe</button>
      </form>
    </>
  );
}

export default App;
