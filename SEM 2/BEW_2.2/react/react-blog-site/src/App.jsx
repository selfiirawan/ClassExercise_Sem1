import './App.css'
import Header from './Header'
import Post from './Post'

function App() {
  return (
    <div className='App'>
      <Header />
      <Post 
        title="First Blog Post" 
        author="John Doe" 
        content="This is my first blog post"
        comments={
          [
            "First! 🚀",
            "Great post!",
            "Thanks for sharing"
          ]
        }
      />
    </div>
  )
}

export default App
