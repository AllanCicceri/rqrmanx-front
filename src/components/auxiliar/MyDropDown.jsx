import { useState } from "react";

function MyDropdown({ options, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const dropItemStyle = "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-bold"

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDropDownItemClick = (item) => {
    setSelected(item)
    onChange(item)
    toggleDropdown()
  }


  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="bg-gray-600 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
      >
        <span className="mr-1">{selected}</span>
        <svg
          className={`fill-current h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5 8l5 5 5-5z" />
        </svg>
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-branco ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {
              options.map(opt => (
                <button className={dropItemStyle} onClick={() => handleDropDownItemClick(opt)}>{opt}</button>
              ))
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default MyDropdown;
