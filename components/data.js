import {
  DevicePhoneMobileIcon,
  CheckCircleIcon,
  HeartIcon,
  AdjustmentsVerticalIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  CogIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/maintain.png";
import benefitTwoImg from "../public/img/maintain2.png";

const benefitOne = {
  title: "Services We Offer:",
  desc: "Choose MetroAC for expert AC installations, routine maintenance, and advanced thermostat integration. Elevate your comfort with our specialized services, ensuring a consistently pleasant environment.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Expert AC Installation Services:",
      desc: "Swift, Efficient, and Precise Installations for Optimal Performance",
      icon: <AdjustmentsVerticalIcon />,
    },
    {
      title: "Reliable AC Repair Services:",
      desc: "Prompt Diagnoses and Fixes During Convenient Business Hours",
      icon: <WrenchScrewdriverIcon />,
    },
    {
      title: "Tailored AC Maintenance Plans",
      desc: "Ensuring a Smooth and Efficient Operation, Customized to Fit Your Schedule",
      icon: <CogIcon />,
    },
    {
      title: "Energy-Efficiency Assessment Solutions:",
      desc: "Recommendations to Enhance Your AC's Efficiency and Save on Bills",
      icon: <LightBulbIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Why Choose Us?",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Expertise You Can Trust",
      desc: "Our team consists of highly skilled and certified technicians with years of experience in air conditioning services.",
      icon: <CheckCircleIcon />,
    },
    {
      title: "Customer-Centric Approach:",
      desc: "Your satisfaction is our priority. We take a customer-centric approach, ensuring clear communication, transparent pricing, and a commitment to delivering the best possible service experience.",
      icon: <HeartIcon />,
    },
    {
      title: "Timely and Reliable Service",
      desc: "We value your time, and our commitment to punctuality is unwavering. Count on us to arrive promptly and complete the job within the agreed-upon timeframe, minimizing disruption to your daily routine.",
      icon: <ClockIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
