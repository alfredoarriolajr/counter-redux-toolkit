import React, { use, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { inputAge } from './ageSlice';

export function Age() {
    const age = useSelector((state) => state.ageNumber.value);
    const dispatch = useDispatch();
    const [aged, setAged] = React.useState();

    return (
        <div>
            <span>{age}</span>
            <div>
                <button
                    aria-label='Age'
                    onClick={() => dispatch(inputAge(aged))}>
                    What is your age
                </button>
                <input
                    aria-label='Set age'
                    value={aged}
                    onChange={(e) => setAged(e.target.value)}
                />
            </div>
        </div>
    );
}
