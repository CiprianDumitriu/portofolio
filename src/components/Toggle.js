import React, {useState} from "react";
import { motion } from "framer-motion";

const Toggle = ({children, title}) => {
    const [toggle, setToggle] = useState(false)
    return (
        <div onClick={() => setToggle(!toggle)}>
            <motion.h4>{title}</motion.h4>
            {toggle ? children : ""}
            <div className="faq-line"></div>
        </div>
    )
}

export default Toggle;