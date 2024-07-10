import img1 from "../Assets/bern-1.jpg";
import img2 from "../Assets/bern-2.jpg";
import img3 from "../Assets/swiz1.jpg";
import img4 from "../Assets/swiz2.jpg";
import india from "../Assets/india img.jpg"
import saudi from "../Assets/saudi.jpg"
import mayaisia from "../Assets/malaisia.jpg"

import { createContext } from 'react';

export const MyContext = createContext("ok");

const MyProvider = ({ children }) => {
    const HeroHeading = [
        {
            heading: "Popular Destination",
            downHeading: "Tours gives you a opportunity to see a lot within the time frame"
        },
        {
            heading: "Recent Trips",
            downHeading: "You can discover unique destinations using Google Maps."
        }
    ];

    const data = [
        {
            img1: img1,
            img2: img2,
            title: "Bern, Switzerland",
            desc: `Old City of Bern: Recognized by UNESCO as a World Heritage Site, the Old Town is characterized by its cobbled streets, arcades, and fountains. It reflects the prosperity of the citizens of Bern in the 17th and 18th centuries and integrates seamlessly into the city's daily life 24.
    Federal Palace (Bundeshaus): An imposing domed structure filled with stained glass windows and statues, the Federal Palace is open to the public when Parliament is not in session. It symbolizes the political heart of Switzerland 3.
    Bear Park (Barenpark): Across the turquoise River Aare, visitors can see four bears in their natural habitat, providing a unique opportunity to observe these magnificent creatures up close.`
        },
        {
            img1: img3,
            img2: img4,
            title: "Brienz, Switzerland",
            desc: `Brienz is a charming village nestled amidst the Swiss Alps, renowned for its picturesque location on the shores of Lake Brienz. It offers a blend of traditional Swiss charm, with its cute wooden houses, and modern amenities, making it a delightful destination for travelers. Brienz serves as an excellent base for exploring the Bernese Oberland region, offering a mix of cultural experiences, outdoor adventures, and relaxation opportunities. Its proximity to major tourist attractions like Interlaken and the Jungfrau region makes it a convenient choice for travelers looking to immerse themselves in the Swiss Alps' beauty and hospitality.`
        },
        
        
    ];
    
    const CardData=[{
        title:"India",
        src:india,
        desc:"India, officially the Republic of India  a country in South Asia. It is the seventh-largest country by area;the world's most populous democracy.It is physiographically bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, the Bay of Bengal on the southeast, and High-mountain Asia on the northeast."
    },
    {
        title:"Saudi Arabia",
        src:saudi,
        desc:"Saudi Arabia,[e] officially the Kingdom of Saudi Arabia (KSA), is a country in West Asia and the Middle East. It covers the bulk of the Arabian Peninsula the fifth-largest country in Asia and the largest in the Middle East. the Peaceful religion Islam is from here"
    },
    {
        title:"Malaysia",
        src:mayaisia,
        desc:"Malaysia[d] is a country in Southeast Asia. The federal constitutional monarchy consists of 13 states and three federal territories, separated by the South China Sea into two regions: Peninsular Malaysia and Borneo's East Malaysia. Pe. Kuala Lumpur is the national capital"
}]

    return (
        <MyContext.Provider value={{ HeroHeading, data, CardData }}>
            {children}
        </MyContext.Provider>
    );
}

export default MyProvider;
