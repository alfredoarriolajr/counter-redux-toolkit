import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';

export function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [amount, setAmount] = React.useState();

    return (
        <div>
            <span>{count}</span>
            <div>
                <button
                    aria-label='Increment value'
                    onClick={() => dispatch(increment())}>
                    Increment
                </button>

                <button
                    aria-label='Decrement value'
                    onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
                <button
                    aria-label='Decrement value'
                    onClick={() =>
                        dispatch(incrementByAmount(Number(amount) || 0))
                    }>
                    Increment by
                </button>
                <input
                    aria-label='Set increment amount'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
        </div>
    );
}
