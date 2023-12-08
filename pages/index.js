import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Metro AC - Stay comfortable, leave it to us. Experience perfect air
          with Metro Air
        </title>
        <meta
          name="description"
          content="Stay comfortable, leave it to us. Experience perfect air
          with Metro Air"
        />
        <link rel="icon" href="/img/metrologo4.svg" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Why Choose Us"
        title=" Cooling Confidence: Why MetroAC Should Be Your First Choice"
      >
        Metro Air Conditioning: Elevate comfort with expert service. Prompt,
        transparent, and cutting-edge. Your top choice for cooling confidence.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Our Work in Action: Time-Lapse "
      >
        Step into the heart of our operations with this captivating time-lapse
        showcase. Watch as we bring expertise to life, capturing the dedication,
        precision, and collaborative spirit that define our work.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Customer Voices: Experiences that Speak Louder Than Words Discover What
        Our Satisfied Clients Have to Say.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Your Queries Answered: Find Solutions to Common Inquiries About Our
        Services in Our Frequently Asked Questions Section.
      </SectionTitle>
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
