import React, {useEffect} from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { fade } from "../animation";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const FaqSection = () => {
    const controls = useAnimation()
    const [element, view] = useInView({ threshold: 0.5})
    useEffect(() => {
        if (view) {
            controls.start("show")
        } else {
            controls.start("hidden")
        }
    })
    return (
        <Faq variants={fade} ref={element} animate={controls} initial="hidden">
            <h2>Any questions <span>FAQ</span></h2>
            <Toggle title="How do I start?">
                <div className="question">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, expedita.</p>
                    </div>
                </div>
            </Toggle>
            <Toggle title="Daily Schedule">
                <div className="question">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, expedita.</p>
                    </div>
                </div>  
            </Toggle>
            <Toggle title="Different Payment Methods">
                <div className="question">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, expedita.</p>
                    </div>
                </div>
            </Toggle>
            <Toggle title="What prodocts do you offer?">
                <div className="question">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, expedita.</p>
                    </div>
                </div>
            </Toggle>
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`

export default FaqSection;