import './App.css';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AddBlog from './pages/AddBlog';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/blog" component={BlogPage} />
          <Route exact path="/new/blog/add" component={AddBlog} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
