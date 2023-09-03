import React, { useState } from 'react'
import moment from "moment/moment.js";
import { CalendarIcon } from 'react-calendar-icon';
import { toast } from 'react-toastify';
import './Tracker.css'


const dateOptions = {
    header: { weekday: "long" },
    footer: { month: "long" },
    value: { day: "2-digit" },
}

function Tracker() {
    const [lastFlow, setLastFlow] = useState(null)
    const [dueDate, setDueDate] = useState(null)
    const [cycleDiff, setCycleDiff] = useState(0)

    const handleChange = (e) => {
        const { value } = e.target
        setLastFlow(value)
        console.log(typeof value)
    }

    const handleCycleChange = (e) => {
        const { value } = e.target
        const dayDiff = value - 28
        const diff = dayDiff * 86400000
        setCycleDiff(diff)
    }

    const getDueDate = () => {
        if (lastFlow === null) {
            toast.warning("Select a date!")
        } else {
            const lastFlowD = new Date(lastFlow)
            const lastMill = lastFlowD.getTime()
            const fullPreg = 24192000000 + cycleDiff
            const dueDateMill = lastMill + fullPreg
            const dueDateC = new Date(dueDateMill)
            setDueDate(dueDateC)
        }
    }
    return (
        <div className='due-date'>
            <div className='due-date-calc'>
                <h5>Due Date Calculator</h5>
                <p>A due date calculator helps you estimate when your baby will be born. Enter
                    the first day of your last period to calculate your expected delivery date.
                    If your menstrual cycle is longer or shorter than the average, enter the cycle length.
                </p>
            </div>
            <div className='input-calc'>
                <div className='calculator'>
                    <div>
                        <label htmlFor='date'>First day of last period</label><br />
                        <input className="date-form" type='date' id='date' name="date" onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor='cycle-length'>Length of cycle</label><br />
                        <input className='cycle-length' name='cycle-length' id='cycle-length' type='number' defaultValue={28} onChange={handleCycleChange} max={35} min={21} />
                    </div>
                    <button className='calc-btn' onClick={getDueDate}>Calculate Due Date</button>
                </div>
                <div className='calc-res'>
                    {dueDate ? <> <p className='exp-edd'>Your expected delivery date is </p>
                        <CalendarIcon date={dueDate} options={dateOptions} />
                        <h5 className='edd'>{moment(dueDate).format('MMMM Do, YYYY')} </h5></>
                        :
                        <h5 className='calc-res-abs'>Your Due Date will be shown here</h5>
                    }
                </div>
            </div>

        </div>
    )
}

export default Tracker