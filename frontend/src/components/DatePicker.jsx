import { useState, useEffect } from "react";

// PACKAGE NPMJS -  datepicker (Select and Modal in another file)

import { Input, Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react";
import { format, parse, isValid } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";


export default function DatePicker({value,onChange}) {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState(value ? format(value, "dd/MM/yyyy") : "")


    // Sync affichage quand la valeur externe change
    useEffect(() => {
        setInputValue(value ? format(value, "dd/MM/yyyy") : "")
    }, [value]);


    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    };


    const commitParsedInput = () => {
        const trimmed = inputValue.trim()
        if (!trimmed) { 
            onChange(null) 
            return
        }


        const parsed = parse(trimmed, "dd/MM/yyyy", new Date())
        if (!isValid(parsed)) { 
            return 
        } 

        onChange(parsed)
    };

    return (

        <Popover open={open} handler={setOpen} placement="bottom-start">
            <PopoverHandler>
                <Input
                value={inputValue}
                placeholder="jj/mm/aaaa"
                onClick={() => setOpen(true)}
                onChange={handleInputChange}
                onBlur={commitParsedInput}
                />
            </PopoverHandler>
            <PopoverContent>
                <DayPicker
                className="datepicker"
                mode="single"
                selected={value ?? undefined}
                onSelect={(date) => {
                if (date) {
                onChange(date);
                setOpen(false); 
                }
                }}
                />
            </PopoverContent>
        </Popover>
    )
}