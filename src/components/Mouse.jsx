import { gsap } from "gsap";
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Mouse.css';
export default function Mouse(){
    

    useEffect(() => {
        var page1Content = document.querySelector('#page1-content');
        var cursor = document.querySelector('#cursor');

        if (page1Content && cursor) {
            const mouseMoveHandler = (dets) => {
                gsap.to(cursor, {
                    x: dets.x,
                    y: dets.y
                });
            };

            const mouseEnterHandler = () => {
                gsap.to(cursor, {
                    opacity: 1,
                    scale: 1
                });
            };

            const mouseLeaveHandler = () => {
                gsap.to(cursor, {
                    opacity: 0,
                    scale: 0
                });
            };

            page1Content.addEventListener('mousemove', mouseMoveHandler);
            page1Content.addEventListener('mouseenter', mouseEnterHandler);
            page1Content.addEventListener('mouseleave', mouseLeaveHandler);

            return () => {
                page1Content.removeEventListener('mousemove', mouseMoveHandler);
                page1Content.removeEventListener('mouseenter', mouseEnterHandler);
                page1Content.removeEventListener('mouseleave', mouseLeaveHandler);
            };
        }
    }, []);
    gsap.registerPlugin(ScrollTrigger);
    return (
        <div id="cursor">
            <h5>Click Me</h5>
        </div>
    );
    }