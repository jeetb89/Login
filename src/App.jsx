import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import './App.css'
import Home from './component/Home';
import Registration from './component/Registration';
import Member from './component/Member';
import OtpPage from './component/OtpPage';
import Privacy from './component/PrivacyPolicy';
import Signingup from './component/Signingup'; 

function App() {
  return (
    
    <Router>
       
      <Routes>
      
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/registration" element={<Registration/>}/>
      <Route exact path="/registration/member" element={<Member/>} />
      <Route exact path="/registration/otpPage/:phoneNumber" element={<OtpPage/>} />
      <Route  exact path="/registration/member/privacy" element={<Privacy/>} />
      <Route  exact path="/registration/member/privacy/signedup" element={<Signingup/>} />
      
      </Routes>
      
    </Router>
    
  )
}

export default App;
