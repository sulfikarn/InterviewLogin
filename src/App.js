import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthLayoutLayout from "./layouts/AuthLayout/AuthLayoutLayout";
import SideBar from "./components/SideBar/SideBar";
import AppLayout from "./layouts/AppLayout/AppLayout";

function App({ isLoggedIn, pendingLogin, user, onSubmit, onLogout }) {
  return (
    <>
    <BrowserRouter>
      {isLoggedIn ?
        <AppLayout/> :
          <AuthLayoutLayout pendingLogin={pendingLogin} onSubmit={onSubmit} />
         }
    </BrowserRouter>
    
      {/* {pendingLogin && <p style={{ textAlign: "center" }}>Please wait...</p>} */}
    
      
    </>
  );
}

const mapStateToProps = ({ isLoggedIn, pendingLogin, user }) => ({
  isLoggedIn,
  pendingLogin,
  user,
});

export default connect(mapStateToProps)(App);
