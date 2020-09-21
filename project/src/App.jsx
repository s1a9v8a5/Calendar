import React, {Component, useState} from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import './common.scss';
import Modal from './components/modal/Modal.jsx';

  /* class App extends Component {

    state = {
        weekStartDate: new Date(),
    }

    goNext = () => {
        this.setState({
            weekStartDate: this.state.weekStartDate + 7
        })
    }

    goPrev = () => {
        this.setState({
            weekStartDate: this.state.weekStartDate - 7
        })
    }

    render() {
        const { weekStartDate } = this.state;
        const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

        return (<>
            <Header 
            goNext={this.goNext}
            goPrev={this.goPrev}
            />
            <Calendar weekDates={weekDates} />
        </>)
    }
};
export default App;  
 */













   const App = () => {

    const [weekStartDate, setWeekStartDate] = useState(new Date)
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

   
  
    return (
        <>
            <Header 
            />
            <Calendar weekDates={weekDates} />
        </>
    )
}

export default App;
 
  