import { IoIosSend } from "react-icons/io";
import { ImAirplane } from "react-icons/im";
import { IoIosJet } from "react-icons/io";

export const projectExperience = [
  {
    name: "VA-1:",
    projects: "Level 2 Award in VA Fares and Ticketing",
    icon: IoIosSend,
    bg: "#9bce97",
    path:'VA1',
    amount:'N50,000.00'
  },
  {
    name: "VA-2:",
    projects: "Level 3 Award in VA Fares and Ticketing",
    icon: ImAirplane,
    bg: "#8cacd6",
    path:'VA2',
    amount:'N80,000.00'
  },
  {
    name: "VA-Earth:",
    projects: "Level 2 Award in VA Earth",
    icon: IoIosJet,
    bg: "#F26440",
    path:'VAEarth',
    amount:'N100,000.00'
  },
];

export const WhatDoIHelp = [
  "At Aeroland and the Confederation of Tourism & Hospitality (CTH), our core mission is to provide the highest standard of hospitality, tourism and culinary qualifications. CTH achieves this through robust monitoring supported by industry, universities and the UK government regulator, Ofqual. CTH has partnerships with major international employers and academic institutions. CTH is a member of the Federation of Awarding Bodies.",
  
  "GTMC, Virgin Atlantic, Star Alliance and CTH work with Aeroland on our Continuing Professional Development programmes while our Management programmes lead to final year undergraduate and Masters degrees with many British and international universities.",

  "CTH is also closely partnered with the renowned Institute of Hospitality and offers a variety of Institute of Hospitality qualifications developed incorporating their unique industry knowledge."

];

export const workExp = [
  {
    place: "Self-Employed, Brisbane",
    tenure: "Aug 2014 - Sep 2016",
    role: "Visual Designer",
    detail:
      "I undergo my VA1 Training in AAA and am now gainfully employed in a travel agency in uk",
  },
  {
    place: "New Man Services",
    tenure: "Aug 2014 - Sep 2016",
    role: "UI/UX Designer",
    detail:
      "After my VA1 training, i did not stop there because i wanted to get the Expert certificate and it was worth it.",
  },
  {
    place: "Global Solution",
    tenure: "Aug 2014 - Sep 2016",
    role: "Sr. Product Designer",
    detail:
      "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  },
];

export const comments = [
  {
    name: "James Aderemi",
    post: "Corporate Travel Consultant",
    comment:
      "I undergo my VA1 Training in AAA and am now gainfully employed in a travel agency in uk.",
    img: "./person1.jpg",
  },
  {
    name: "Abimbola Timothy",
    post: "Booking Manager",
    comment:
      "With my VA1 training, i did not stop there because i wanted to get the Expert certificate and it was worth it..",
    img: "./person2.jpg",
  },
  {
    name: "Joshua Ikenna",
    post: "Aviation Analyst Manager",
    comment:
      'After my graduation from the uni i took a the Virgin Atlantic course with Aeroland and shortly after that i got a job in a corporation.',
    img: "./person3.jpg",
  },
  {
    name: "Babatunde Gabriel",
    post: "Ticketing Manager",
    comment:
      "Sometimes i wonder why i had to spend so many years studying Engineering when i would have just taken the Travel reservation course and get the job i desire.",
    img: "./person4.jpg",
  },
  {
    name: "Suleimon Freeborn",
    post: "Reservation Manager",
    comment:
      "I refered my sister to AAA and now she is thanking me for opening her up to this training.",
    img: "./person5.jpg",
  },
  {
    name: "Thompson Wale",
    post: "Creative Manager",
    comment:
      "What an outstanding certificate to behold, thank your AAA, thank you CTH and thank you Virgin Atlantic.",
    img: "./person6.jpg",
  },
  {
    name: "Anamika Sandra",
    post: "Travel Manager",
    comment:
      "You can never get it wrong with AAA.",
    img: "./person7.jpg",
  },
  {
    name: "Jeffrey Ezekiel",
    post: "Social Media Director",
    comment:
      "Am now working as a social media director in an aviation firm after gaining the experience i desire from AAA.",
    img: "./person8.jpg",
  },
  {
    name: "Olaitan Aromire",
    post: "Reservation Manager",
    comment:
      "I have assisted hundreds of people to quickly get their visa to countries all over the world, thanks to AAA.",
    img: "./person9.jpg",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
