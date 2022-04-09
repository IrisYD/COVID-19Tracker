import './dropdown.css';
import React, {useState} from "react";
import {NativeSelect, FormControl} from "@mui/material";

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
                            <option key={item} value={item}>
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