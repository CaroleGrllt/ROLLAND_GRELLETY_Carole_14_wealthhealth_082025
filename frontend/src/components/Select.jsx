import { Select, Option } from "@material-tailwind/react";
import { FaChevronDown } from "react-icons/fa";

export default function Selector({id, value, onChange, options}) {
  
  return (
      <Select
        id={id}
        className="select"
        variant="static"
        arrow={<FaChevronDown />}
        value={value}
        onChange={(val) => onChange(val ?? "")}
      >
        {options.map((opt) => (
          <Option key={opt.value} value={opt.value}>
            {opt.label}
          </Option>
        ))}
      </Select>
  )
}