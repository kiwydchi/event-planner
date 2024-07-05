/* import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];

function App() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        
        for (let i=0; i<allEvents.length; i++){

            const d1 = new Date (allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);
      
          //console.log(d1 <= d2);
          //console.log(d2 <= d3);
          //console.log(d1 <= d4);
          //console.log(d4 <= d3);
            

             if (
              ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
                (d4 <= d3) )
              )
            {   
                alert("CLASH"); 
                break;
             }
    
        }
        
        
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div className="App">
            <h1>Calendar</h1>
            <h2>Add New Event</h2>
            <div>
                <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    );
}

export default App; */

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
  //const currentMonth = dayjs().month();
  //const monthName = date.toLocaleString('default', { currentMonth: 'long' });

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