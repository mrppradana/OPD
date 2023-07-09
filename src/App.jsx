import {Routes, Route} from 'react-router-dom'
import FaqPages from './pages/FaqPages';
import Homepage from './pages/Homepage';
import Opdpages from './pages/Opdpages';
import Testimonialpages from './pages/Testimonialpages';



function App() {
return <div>
  <Routes>
    <Route path='/' Component={Homepage}/>
    <Route path='/opd' Component={Opdpages}/>
    <Route path='/testimonial' Component={Testimonialpages}/>
    <Route path='/faq' Component={FaqPages}/>
  </Routes>
</div>;
}

export default App
