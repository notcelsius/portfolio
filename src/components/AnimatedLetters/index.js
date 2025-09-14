import './index.scss';

// returns strArray as a bunch of spans
const AnimatedLetters = ( {letterClass, strArray, idx} ) => {   // letter class is the base  CSS class to use on each letter
                                                                // strArray is the array of letters to display
                                                                // idx is a number offset for creating unique numbered classes
    return (
        <span>{/* component returns JSX that renders one outer <span> */}
            {
                strArray.map((char, i) => (
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}

export default AnimatedLetters;