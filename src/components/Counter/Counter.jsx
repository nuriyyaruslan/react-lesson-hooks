import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../../features/counter/counterSlice';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <Container maxWidth="sm">
            <Box sx={{ bgcolor: '#cfe8fc', height: '70vh', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>

                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(incrementByAmount(5))}
                >
                    DecrementByAmount
                </button>
            </Box>
        </Container>


    )
}