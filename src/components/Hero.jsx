
import gsap, { Circ } from 'gsap';
import { useGSAP } from '@gsap/react';
import bg from '../Assets/bg.jpeg';

function Hero() {

    useGSAP(() => {
        gsap.from("#text1", {
            x: 1000,
            duration: 5,
            ease: Circ,
        });
    }, []);

    return (
        <div className="h-screen  w-screen">
            <div>
                <img className="sm:h-[100vh] object-cover min-h-screen w-full" src={bg} />
                <h2 id="text1" className="absolute sm:text-6xl sm:left-[27rem] sm:font-bold text-white font-bold text-2xl font-sans top-[23rem] left-[3.6rem]">
                    Your Journey Your Story
                </h2>
                <h2 id="text2" className="absolute sm:text-3xl sm:top-[19rem] sm:left-[34rem] sm:font-bold text-white text-sm top-[26rem] left-[4.9rem]">
                    Choose your favourite Destination
                </h2>
                <button id="button" className="hover:bg-black hover:text-white hover:duration-700 hover:ease-linear sm:left-[42rem] sm:text-2xl sm:px-[4rem] left-[7rem] absolute top-[30rem] py-2 bg-white px-10">
                    Travel Plans
                </button>
            </div>
        </div>
    );
}

export default Hero;
