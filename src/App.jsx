import './App.css'
import {Routes, Route} from 'react-router-dom'
import DiscussionForum from './components/DiscussionForum'
import GradeBook from './components/GradeBook'


function App() {
 

  return (
    <>
      <Routes>
      <Route path='/' element={<DiscussionForum/>}></Route>
      </Routes>
    </>
  )
}

export default App
