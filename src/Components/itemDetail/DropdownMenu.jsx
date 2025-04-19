import { useState, useRef, useEffect } from "react";
import dropboxIcon from "../../assets/dropbox-icon.png";

const DropdownMenu = ({ options, isEditing }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <div className="relative" ref={menuRef}>
      <button onClick={() => setOpen((prev) => !prev)}>
        {}

        {!isEditing && (
          <img
            src={dropboxIcon}
            alt="dropboxIcon"
            className="w-[24px] h-[24px]"
          />
        )}
      </button>

      {open && (
        <div className="absolute right-[4px] top-[24px] text-[#6B7280] mt-2 w-[120px] bg-white border rounded-[8px] shadow">
          {options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => {
                option.onClick();
                setOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
