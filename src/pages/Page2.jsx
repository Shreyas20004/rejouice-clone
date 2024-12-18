import './Page2.css';
import { useEffect } from 'react';
import { gsap, Power2, Power4 } from "gsap";

export default function Page2() {
   

    useEffect(() => {
        const tl = gsap.timeline({scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            start: "top 80%",
            end: "top 5%",
            //markers: true,
            scrub: 2,
        }});
    
        tl.from("#p2-title-part1 h2, #p2-title-part2 h1",{
            y: 80,
            opacity: 0,
            stagger: 0.2,
            ease: Power2.InOut,
            duration: 3,
        })
        tl.from("#page2 #line", {
                width: "0%", // Set the final width of the line to 100%
                duration: 1, // Animation duration
                ease: Power4.InOut // Easing function
        });
        tl.from(".span-wrapper span",{
            y: "4vw",
            duration: 1,
        })
    }, []);

    return (
        <div id="page2">
        <div id="page2-titles">
            <div id="p2-title-part1">
                <h2 id="title1">Full-service creative agency.</h2>
                <h2 id="title2">Two engagement models.</h2>
            </div>
            <div id="p2-title-part2">
                <h1>Paris & San Diego</h1>
            </div>
        </div>
        <div id="line"></div>
        <div id="about-us">
            <div className="span-wrapper span-wrapper1"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are a digital brand accelerator. We</span> <br/></div>
            <div className="span-wrapper span-wrapper2"><span>design, develop, and scale market-defining</span> <br/></div>
            <div className="span-wrapper span-wrapper3"><span>brands by unlocking their hidden potential.</span> <br/></div>
            <div className="span-wrapper span-wrapper4"><span>Choose full cash compensation or offset up to</span>  <br/></div>
            <div className="span-wrapper span-wrapper5"><span>50% of our fees for equity in your company. Your</span> <br/></div>
            <div className="span-wrapper span-wrapper6"><span>vision, your decision.</span></div>
        </div>
    </div>
    );
}