import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeAnimation = () => {
    return (
        <Typewriter
            words={[ "Web Developer", "UI/UX Designer","Graphic Designer","Freelancer"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
        />
    );
};

export default TypeAnimation;
