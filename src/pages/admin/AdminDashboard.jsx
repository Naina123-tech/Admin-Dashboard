import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import StatCard from "../../Components/StatCard";
import "./AdminDashboard.css";
function 
AdminDashboard(){
    return(
        <div className="admin-layout">
            <Sidebar/>
            <div className="main-content">
                <Navbar/>
                <div className="dashboard content">
                    <h1> Admin Dashboard</h1>
                    <p> Welcome to Admin Dashboard</p>
                <div className="stats-container">
                    <StatCard title="Total Users" value="1250" icon="👥"/>
                    <StatCard title="Total Reports" value="342" icon="📝"/>
                    <StatCard title="Pending Reports" value="48" icon="⌛"/>
                    <StatCard title="Resolved Reports" value="294" icon="✅"/>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default AdminDashboard;