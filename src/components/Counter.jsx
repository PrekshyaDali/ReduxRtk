import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../app/features/counter/counterSlice'

export default function Counter() {
    //read the data from the store
    const count = useSelector((state) => state.counter.value)

    //changing the data by sending actions to the store
    const dispatch = useDispatch()

    return (
        <>
            <h1>{count}</h1>
            <button onClick={(()=> dispatch(increment()))} className="m-5 rounded-sm h-10 w-44 bg-green-400 text-3xl hover:bg-green-300 hover:active:bg-green-400">+</button>
            <button onClick={(()=> dispatch(decrement()))} className='m-5 rounded-sm h-10 w-44 bg-pink-300 hover:bg-pink-200 hover:active:bg-pink-300 '>-</button>
        </>
    )
}
