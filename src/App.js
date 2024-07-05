import React, {useState, useMemo} from "react";
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import { Box, Button, Table, TableBody, ThemeProvider, Typography } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from 'dayjs';
import "./App.css";


function App() {

  const localizer = dayjsLocalizer(dayjs)

  const [currentMonth, setCurrentMonth] = useState(dayjs().month());
  const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  const [monthName, setMonthName] = useState(monthNames[currentMonth]);


  const theme = createTheme({
    palette: {
      primary: {
        main: "#000000"
      },
      secondary: {
        main: "#e30000"
      }
    },
  });

  const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2024, 6, 5),
        end: new Date(2024, 6, 5),
    },
    {
        title: "Vacation",
        start: new Date(2024, 6, 7),
        end: new Date(2024, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2024, 6, 20),
        end: new Date(2024, 6, 23),
    },
  ];

  const { views } = useMemo(
    () => ({
      views: {
        month: true
      },
    }),
    []
  )

  return (
    <Box>
      <Typography>planner event</Typography>
      <Typography>{monthName}</Typography>
      <Button>
        <ArrowBackIosRoundedIcon></ArrowBackIosRoundedIcon>
      </Button>
      <Button>
        <ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>
      </Button>
      <ThemeProvider theme={theme}>
        <Button variant="contained" disableElevation>Войти</Button>
      </ThemeProvider>
    <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 1000 , margin: "50px"}} view='month' views={views}/>
    </Box>
  );
}

export default App;