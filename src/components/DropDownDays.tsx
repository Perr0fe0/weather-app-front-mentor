import { useState } from "react";
import '../dropdown.css'

type Option = {
    label: string;
    value: string;
};

type DropdownProps = {
    options: Option[];
    onSelect: (option: Option) => void;
    placeholder?: string;
};

const DropdownDays = ({
    options,
    onSelect,
    placeholder = "Seleccionar",
}: DropdownProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<Option | null>(null);

    const handleSelect = (option: Option) => {
        setSelected(option);
        onSelect(option);
        setOpen(false);
    };

    return (
        <div className="dropdown">
            <button
                className="dropdown-button"
                onClick={() => setOpen(!open)}
            >
                {selected ? selected.label : placeholder}
            </button>

            {open && (
                <ul className="dropdown-menu">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className="dropdown-item"
                            onClick={() => handleSelect(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownDays;
