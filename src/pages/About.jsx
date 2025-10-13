import React, { useEffect, useState, useRef } from "react";
import Timeline from "../components/Timeline";
import { drexelJpeg, hhsPng, upfPng, aboutPic1Jpg, aboutPic2Jpg, aboutPic3Jpg } from "../assets";

const About = () => {
  const paragraphs = [
    "I am an undergraduate Honors student studying Computer Science at Drexel University, with concentrations in both AI/ML and Computer Systems, along with a minor in Business Analytics. I love math and I love programming (as you could probably tell with this website lol), so I want to study as much of it as possible. Another cool thing is that I did a study abroad program at Universitat Pompeu Fabra in Barcelona, and I was actually able to take CS courses while I was there. It was really interesting to see how CS concepts were explained in the European education system. To be honest it was surprisingly similar to how things work here in the States. Also Barcelona is probably the coolest European city I've ever seen.",
    "Some of my project experiences include DragonLearn, which uses LangChain to basically convert any syllabus into detailed course modules with recommended videos and animations (it's actually insane what you can do with LLMs nowadays) and Project Janata, a social app built with React Native and Expo to connect youth members of my religious organization, Chinmaya Mission. I love how you can just come up with an idea, and, with enough dedication, you can just make it happen.",
    "One of the reasons I go to Drexel is their Co-op program, so I was able to gain a lot of experience throughout my years here. My first internship was at EV Buddy, a startup aiming to develop a Vehicle to Vehicle charging solution, which would be the first of it's kind. That made me very interested in embedded systems, so my next job was a Software Development Engineering Co-op at Epiq Solutions, a company that specializes in developing software defined radios (SDR) systems. What was interesting was that I started this internship in the middle of an acquisition. I have probably learned the most from my summer there.",
    ];
    const timelineItems = [
            {
              title: "Drexel University",
              subtitle: "B.S. in Computer Science",
              location: "Philadelphia, PA",
              dates: "Sep 2022 - Present",
              minor: "Business Analytics",
              honorsAwards: "Dean's List (2022), Pennoni Honors Program, A.J. Drexel Scholarship",
              activities: "Drexel Society of Artificial Intelligence",
              image: drexelJpeg,
            },
            {
              title: "Universitat Pompeu Fabra",
              subtitle: "International Exchange - Engineering",
              location: "Barcelona, Spain",
              dates: "Jan 2025 - Mar 2025",
              activities: "Erasmus Student Network",
              image: upfPng,
            },
            {
              title: "Hightstown High School",
              location: "Hightstown, NJ",
              dates: "Sep 2018 - Jun 2022",
              honorsAwards: "Math Honors Society, Honor Roll, AP Capstone Diploma",
              activities: "Robotics, SAATHH, DECA, Track & Field",
              image: hhsPng,
            }
          ];

  const funFacts = [
    "Even though I lived in the New Jersey for most of my life, I was actually born in India and moved here when I was 4 months old.",
    "I love to travel. Like a lot. I have probably been to over 20 countries so far.",
    "I also enjoy staying physically active, whether it be exercising at the gym, playing basketball, or going on a hike.",
    "I am an avid NFL and College Football watcher. My teams are the Eagles and Rutgers. Yes, I enjoy only pain and suffering.",
    "Since like 5 years ago, I have become interested in comics, especially those from DC in recent years.",
    "Sichuan food is goated."
  ];

  const photos = [
    {
      src: aboutPic1Jpg,
      alt: "Montjuic, Barcelona",
      caption: "View from Montjuic in Barcelona, Spain"
    },
    {
      src: aboutPic2Jpg,
      alt: "Amber Fort, India",
      caption: "View of Amber Fort in Jaipur, Rajasthan, India"
    },
    {
      src: aboutPic3Jpg,
      alt: "A dog",
      caption: "My dog, Aria (She want a snuggle)"
    }
  ];

  // Animation state for each element
  const [visibleParagraphs, setVisibleParagraphs] = useState(0);
  const [visibleTimelineItems, setVisibleTimelineItems] = useState(0);
  const [funHeaderVisible, setFunHeaderVisible] = useState(false);
  const [visibleFacts, setVisibleFacts] = useState(0);
  const [photoHeaderVisible, setPhotoHeaderVisible] = useState(false);
  const [visiblePhotos, setVisiblePhotos] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    let cancelled = false;
    async function run() {
      // Paragraphs
      for (let i = 1; i <= paragraphs.length; i++) {
        setVisibleParagraphs(i);
        await new Promise(res => setTimeout(res, 350));
        if (cancelled) return;
      }

      // Timeline items
      for (let i = 1; i <= timelineItems.length; i++) { // 3 timeline items
        setVisibleTimelineItems(i);
        await new Promise(res => setTimeout(res, 500));
        if (cancelled) return;
      }

      // Fun Facts Header
      setFunHeaderVisible(true);
      await new Promise(res => setTimeout(res, 350));
      if (cancelled) return;

      // Fun Facts bullets
      for (let i = 1; i <= funFacts.length; i++) {
        setVisibleFacts(i);
        await new Promise(res => setTimeout(res, 250));
        if (cancelled) return;
      }

      // Photos Header
      setPhotoHeaderVisible(true);
      await new Promise(res => setTimeout(res, 350));
      if (cancelled) return;

      // Photos
      for (let i = 1; i <= photos.length; i++) {
        setVisiblePhotos(i);
        await new Promise(res => setTimeout(res, 250));
        if (cancelled) return;
      }
    }
    run();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="px-6 lg:px-32 py-6">
      <h1 className="font-outfit text-3xl font-bold mb-6 text-content">About Me</h1>

      {/* Paragraphs */}
      {paragraphs.map((text, i) => (
        <p
          key={i}
          className={`font-geist-mono text-content mb-6 transition-all duration-500 transform ${
            visibleParagraphs > i ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          {text}
        </p>
      ))}

      {/* Timeline */}
      <div
        className={`transition-all duration-500 ${visibleTimelineItems > 0 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
        aria-hidden={visibleTimelineItems === 0}
      >
        <p className="font-geist-mono text-xl font-bold uppercase mb-4 text-primary">Education</p>
        <Timeline
          items={timelineItems}
          visibleCount={visibleTimelineItems}
        />
      </div>

      {/* Fun Facts */}
      <p
        className={`font-geist-mono text-xl font-bold uppercase mb-4 text-primary transition-all duration-400 transform ${
          funHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        Fun Facts
      </p>
      
      <ul
        className={`font-geist-mono text-xl list-disc mb-8 pl-8 text-muted big-bullets transition-all ${
          funHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        {funFacts.map((fact, i) => (
          <li
            key={i}
            className={`mb-2 transition-all duration-400 transform ${
              visibleFacts > i ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          ><span>
            {fact}
          </span></li>
        ))}
      </ul>

      {/* Photos */}
      <p
        className={`font-geist-mono text-xl uppercase font-bold mb-4 text-primary transition-all duration-400 transform ${
          photoHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        Photos
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
        {photos.map((photo, i) => (
          <div
            key={i}
            className={`transition-all duration-500 transform ${
              visiblePhotos > i ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            <img
              src={visiblePhotos > i ? photo.src : ""}
              alt={photo.alt}
              loading="lazy"
              className="md:w-100 md:h-100 object-cover rounded-lg shadow-md mb-2"
            />
            <p className="font-geist-mono text-left text-sm text-muted">{photo.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;