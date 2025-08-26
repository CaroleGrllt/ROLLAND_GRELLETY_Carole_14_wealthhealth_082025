
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateSelector(props) {
  
  return (
    <DatePicker
      id={props.id}
      className={props.className}
      dateFormat="dd/MM/yyyy"
      placeholderText="jj/mm/aaaa"
      maxDate={new Date()}
      minDate={new Date("1900-01-01")}
      selected={props.selected}
      onChange={props.onChange}
      isClearable
    />
  );
}

