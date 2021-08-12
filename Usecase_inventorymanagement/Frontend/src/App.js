
import Login from './Components/Login';
import Home from './Components/Home'
import About from './Components/About'
import Navigation from './Components/Navigation'
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import NavBar from './Components/NavBar';
import Dashboard from './Components/Dashboard'
import Sidebar from './Components/Sidebar'
import Product from './Components/Product'
import AddProduct from './Components/AddProduct'
import ManageProduct from './Components/ManageProduct';
import User from './Components/User';
import AddUser from './Components/AddUser'
import ManageUser from './Components/ManageUser'
import UserDashboard from './UserPage/UserDashboard';
import StockApprove from './UserPage/StockApprove';
import Report from './Components/Report'
import ProductEdit from './Components/ProductEdit';
import UserEdit from './Components/UserEdit';
import StockInward from './UserPage/StockInward';
import RoleBasedRouting from './Components/RoleBaseRouting';
function App() {
  return (
    <div>
      <Router>
      
      <Switch>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/products" exact component={Product}></Route>
          <Route path="/products/add" exact component={AddProduct}></Route>
          <Route path="/products/manage" exact component={ManageProduct}></Route>
          <Route path="/products/manage/:id" exact component={ProductEdit}></Route>
          <Route path="/user" exact component={User}></Route>
          <Route path="/user/add" exact component={AddUser}></Route>
          <Route path="/user/manage" exact component={ManageUser}></Route>
          <Route path="/userdashboard" exact component={UserDashboard}></Route>
          <Route path="/stockapprove" exact component={StockApprove}></Route>
          <Route path="/reports" exact component={Report}></Route>
          <Route path="/user/manage/:id" exact component={UserEdit}></Route>
          <Route path="/stock/inward" exact component={StockInward}></Route>
          <Route path="/stock/inward/approve" exact component={StockApprove}></Route>
              
          <RoleBasedRouting exact path="/dashboard" component={Dashboard} roles={['ROLE_ADMIN']} />
        </Switch>
        </Router>
    </div>
  );
}
export const grantPermission = (requestedRoles) => {
  const permittedRoles =  localStorage.getItem('userRoles');
 // in case of multiple roles, if one of the permittedRoles is present in requestedRoles, return true;
  return false;
};
export default App;
