
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/homePage';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/Signup/Signup';
import CreateEvent from './pages/CreateEvent/CreateEvent';
import AllEvents from './components/AllEvents/AllEvents';
import BookingList from './pages/BookingList/BookingList';
import BookEvent from './pages/BooKEvent/BookEvent';

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', sans-serif", // 👈 replace with your preferred font
  },
});

function App() {
 

  return (
   

    <>
       <ThemeProvider theme={theme}>
      <Routes>
         <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/createevents' element={<CreateEvent />} />
          <Route path='/allevents' element={<AllEvents/>} />
          <Route path='/bookinglist' element={<BookingList/>} />
          <Route path='/bookevent' element={<BookEvent/>} />

      </Routes>
    </ThemeProvider>
    </>
  )
}

export default App
