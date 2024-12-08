import AttendeesComment from './AttendeesComment';
import ComingEvent from './ComingEvent';
import Community from './Community';
import FAQs from './FAQs';
import HeroSection from './HeroSection';
import LearnMore from './LearnMore';
import Sponsor from './Sponsor';
import WhatWeDo from './WhatWeDo';
import WhatWeOffer from './WhatWeOffer';
import WhoWeAre from './WhoWeAre';

const Home = () => {
  return (
    <div className=' relative top-[6rem] h-full w-full'>
        <HeroSection />
        <WhoWeAre />
        <WhatWeOffer />
        <LearnMore />
        <Sponsor />
        <ComingEvent />
        <Community/>
        <WhatWeDo />
        <AttendeesComment />
        <FAQs />

    </div>
  )
}

export default Home
