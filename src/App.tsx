import { Route, Switch } from 'wouter'
import Home from './pages/home'
import Works from './pages/works'
import WorksDetail from './pages/works/WorksDetail'
import Texts from './pages/texts'
import TextsDetails from './pages/texts/TextsDetails'
import About from './pages/about'
import Press from './pages/press'
import News from './pages/news'
import Contact from './pages/contact'
import Error from './pages/error'

function App() {
  return (
    <Switch>
      <Route
        path='/'
        component={Home}
      />
      <Route
        path='/works'
        component={Works}
      />
      <Route
        path='/works/:id'
        component={WorksDetail}
      />
      <Route
        path='/texts'
        component={Texts}
      />
      <Route
        path='/texts/:id'
        component={TextsDetails}
      />
      <Route
        path='/about'
        component={About}
      />
      <Route
        path='/press'
        component={Press}
      />
      <Route
        path='/news'
        component={News}
      />
      <Route
        path='/contact'
        component={Contact}
      />
      <Route component={Error} />
    </Switch>
  )
}

export default App
