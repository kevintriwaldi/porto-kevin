import "./app.css"
import Navbar from "./components/Navbar"
import Content from "./components/Content"
import Sidebar from "./components/Sidebar"
function App() {
  return (
    <div className="container">
      <div className="left-container">
        <Sidebar />{" "}
      </div>

      <div className="right-container">
        <Navbar />
        <Content />
      </div>
    </div>
  )
}

export default App
