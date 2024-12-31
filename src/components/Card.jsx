import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceFive, faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceSix } from "@fortawesome/free-solid-svg-icons";

function getRandomBetween(lower, upper) {
    // upper inclusive
    return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

const CardWithButton = ({ children, className, buttonCallback }) => {
    
    const [iconRotate, setIconRotate] = useState(0);
    const [selectedIcon, setSelectedIcon] = useState(0);
    var icons = [faDiceFive, faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceSix];
    const handleButtonClick = (e) => {
        setIconRotate(!iconRotate);
        setSelectedIcon(getRandomBetween(0,5));
        if(buttonCallback != null) buttonCallback(e);
    };
    return (
    <div className={`relative shadow-md rounded-lg p-4 pb-10 ${className}`}>
        {children}
        <button
        className="group absolute left-1/2 -bottom-6 h-12 w-12 rounded-full transform -translate-x-1/2 
                bg-primary-neonGreen flex items-center justify-center shadow-xl hover:bg-neutral-grayBlue transition-colors
                duration-300 hover:outline-primary-lightCyan outline-1 outline outline-neutral-darkGB"
        onClick={handleButtonClick}
        >
        <FontAwesomeIcon
            icon={icons[selectedIcon]}
            className={`h-6 w-6 text-neutral-darkBlue group-hover:text-primary-lightCyan transition-all duration-300 ${iconRotate ? 'rotate-0' : 'rotate-180'}`}
        />
        </button>
    </div>
    );
};

export default CardWithButton;
