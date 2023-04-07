import {Switch, Route} from 'react-router-dom'
import './App.css'
import ProtectedRoute from './Components/ProtectRoute'
import Login from './Components/Login'
import Home from './Components/Home'
import NotFound from './Components/NotFound'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
)

export default App
