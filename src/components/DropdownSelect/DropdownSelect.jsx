import "./DropdownSelect.css";

function DropdownSelect({ options, value, onChange }) {
  return (
    <div className="dropdown-select-wrapper">
      <select
        id="sort-select"
        className="dropdown-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownSelect;
