import Banner from "../../components/landing/Banner/Banner";
import GetInTouch from "../../components/landing/GetInTouch/GetInTouch";
import KeyUses from "../../components/landing/KeyUses/KeyUses";
import Vision from "../../components/landing/Vision/Vision";
import WhatSixtien from "../../components/landing/WhatSixtine/WhatSixtien";
import Footer from "../../components/shared/Footer/Footer";

const Landing = () => {
    return (
        <div>
            <Banner/>
            <WhatSixtien/>
            <KeyUses/>
            <Vision/>
            <GetInTouch/>
            <Footer/>
        </div>
    );
};

export default Landing;