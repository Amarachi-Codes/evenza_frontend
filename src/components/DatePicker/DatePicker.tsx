import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import "./DatePicker.css"


const MyDatePicker = () => {

  return (
    <>
       <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker className='datePicker'
      
      />
    </LocalizationProvider>
    </>
  )
}

export default MyDatePicker



