import "./App.css";
import Header from "./Header";
// import Post from "./Post";
import PostList from "./PostList";

function App() {
  const posts = [
    {
      title: "First Blog Post",
      author: "John Doe",
      content: "This is my first blog post",
      comments: ["First! 🚀", "Great post!", "Thanks for sharing"],
    },
    {
      title: "Second Blog Post",
      author: "Jane Doe",
      content: "This is my second blog post",
      comments: ["Excellent post!", "Slayyy 💅🏻", "You go gurl"],
    },
  ];

  return (
    <div className="App">
      <Header />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
