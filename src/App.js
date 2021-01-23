import { BrowserRouter, Route } from 'react-router-dom'
import editwork from './editwork'
import result from './result'
import mainpage from './mainpage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
<Route path='/editwork' component={editwork}/>
<Route path='/result' component={result}/>
<Route path='/' component={mainpage}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
