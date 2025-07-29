import "../styles/Sidebar.css"
import profpic from "../assets/profpic.jpg"

function Sidebar() {
  return (
    <div className="sidebar-card">
      <div className="sidebar-title">
        <h4>Kevin Wahyu Triwaldi</h4>
        <p>Project Manager</p>
      </div>
      <div
        className="sidebar-image"
        style={{ backgroundImage: `url(${profpic})` }}
      ></div>
      <div className="sidebar-bio"></div>
    </div>
  )
}

export default Sidebar
