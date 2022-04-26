import React, {useState} from "react";
import {NativeSelect, FormControl} from "@mui/material";
import './dropdown.css';

/**
 *
 * @param label
 * @param defaultState
 * @param options
 * @returns {[unknown, (function()), ((value: unknown) => void)]}
 */
const useDropDown = (label, defaultState, options) => {
    const [state, setState] = useState(defaultState);

    const DropDownMaker = () => (
        <FormControl className="formControl">
            <label htmlFor={label}>
                {label}
                <NativeSelect
                    id={label}
                    value={state}
                    onChange={e => setState(e.target.value)}
                    disabled={!options.length}
                >
                    {
                        options.map(item =>
                            <option key={item} value={item} className="dropOptions">
                                {item}
                            </option>
                        )
                    }
                </NativeSelect>
            </label>
        </FormControl>
    );
    return [state, DropDownMaker, setState];
};

export default useDropDown;