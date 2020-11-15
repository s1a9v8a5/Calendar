import React from 'react';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import './calendar.scss';
import PropTypes from 'prop-types';

const Calendar = ({ weekDates, weekStartDate, events, handleOnDelete, refreshPage }) => {
   
    return (
        <section className="calendar" >
            <Navigation
                weekDates={weekDates}
                weekStartDate={weekStartDate}
            />
            <div className="calendar__body">
                <div className="calendar__week-container">
                    <Sidebar />
                    <Week
                        weekDates={weekDates}
                        weekStartDate={weekStartDate}
                        events={events}
                        handleOnDelete={handleOnDelete}
                        refreshPage={refreshPage}

                    />
                </div>
            </div>
        </section>
    )
}
export default Calendar;


Calendar.propTypes = {
    weekDates: PropTypes.array,
    weekStartDate: PropTypes.object,
    events: PropTypes.array,
    handleOnDelete: PropTypes.func,
    refreshPage: PropTypes.func,
} 
