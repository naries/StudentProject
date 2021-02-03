import React, { useState } from 'react'

const normal = "border-2 text-indigo-800 rounded-full pl-5 pr-5 border-indigo-600 p-2 mb-2 cursor-pointer hover:font-semibold hover:bg-indigo-600 hover:text-white "
const selected = normal + " text-gray-50 bg-indigo-600"
const enormal = "inline-block border-2 text-sm mr-2 text-red-800 rounded-full pl-5 pr-5 border-red-600 p-2 mb-2 cursor-pointer hover:font-semibold hover:bg-red-600 hover:text-white "
const eselected = enormal+ " text-gray-50 bg-red-600"

const x = {
    a: 'computerScience',
    b: 'mathematics',
    c: 'statistics',
    d: 'biology',
    e: 'chemistry',
    f: 'physics',
    g: 'biochemistry'
}

const data = {
    computerScience: [
        {//100l
            monday: [
                {
                    time: '8 am - 11 am',
                    course: 'CSC 101'
                }, 
                {
                    time: '11 am - 12 am',
                    course: 'MTH 111'
                },
                {
                    time: '12 noon - 1 pm',
                    course: 'MTH 113'
                },
                {
                    time: '2 pm - 4 pm',
                    course: 'GST 101'
                },
            ],
            tuesday: [

            ],
        }, 
        {
            //200l
        }
    ],
    statistics: [
        {//100l
            monday: [
                {
                    time: '8 am - 11 am',
                    course: 'STA 101'
                }, 
                {
                    time: '11 am - 12 am',
                    course: 'MTH 111'
                },
                {
                    time: '12 noon - 1 pm',
                    course: 'MTH 113'
                },
                {
                    time: '2 pm - 4 pm',
                    course: 'GST 101'
                },
            ],
            tuesday: [

            ],
        }, 
        {
            //200l
        }
    ],
}

const EventsCalender = () => {
    const [picked, setPicked] = useState(0)
    const [courses, setCourses] = useState('')
    console.log(picked, courses)
    const _setPick = (w) => {
        setPicked(w)
    }

    const _setCourses = (w) => {
        setCourses(w)
    }

    return (
        <>
            <div className="ml-10 mt-4 mb-4 w-1/6">
                <div onClick={()=>_setPick(1)} className={picked===1?selected:normal}>Monday</div>
                <div onClick={()=>_setPick(2)} className={picked===2?selected:normal}>Tuesday</div>
                <div onClick={()=>_setPick(3)} className={picked===3?selected:normal}>Wednesday</div>
                <div onClick={()=>_setPick(4)} className={picked===4?selected:normal}>Thursday</div>
                <div onClick={()=>_setPick(5)} className={picked===5?selected:normal}>Friday</div>
            </div>
            <div className="w-3/5 align-middle justify-between text-center px-10">
                {/* use a book Icon Here */}
                {(picked===0 || courses==='') && <div className="text-gray-700">Select from Both sides <br/>to show courses here!</div>}
                {(picked!==0 && courses!=='') && data[x[courses]][0][picked===1?'monday'
                :picked===2?'tuesday':picked===3?'wednesday':picked===4?'thursday':'friday'].map(a=><>
                    <div className="text-red-100 bg-gray-700 p-4">{a.time}</div>
                    <div className="p-2">{a.course}</div>
                </>)}
            </div>
            <div className="mr-10 w-1/5 z-10">
                <div onClick={()=>_setCourses('a')} className={courses==='a'?eselected:enormal}>Computer Science</div>
                <div onClick={()=> setCourses('b')} className={courses==='b'?eselected:enormal}>Mathematics</div>
                <div onClick={()=>_setCourses('c')} className={courses==='c'?eselected:enormal}>Statistics</div>
                <div onClick={()=>_setCourses('d')} className={courses==='d'?eselected:enormal}>Biology</div>
                <div onClick={()=>_setCourses('e')} className={courses==='e'?eselected:enormal}>Chemistry</div>
                <div onClick={()=>_setCourses('f')} className={courses==='f'?eselected:enormal}>Physics</div>
                <div onClick={()=>_setCourses('g')} className={courses==='g'?eselected:enormal}>BioChemistry</div>

            </div>
        </>
    )
}

export default EventsCalender