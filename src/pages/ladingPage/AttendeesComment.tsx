import { useRef, useState } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { ArrowLeft, ArrowRight} from "@phosphor-icons/react";
import attendee from '../../assets/img/Ellipse 309.png'

const AttendeesComment = () => {
  const sliderRef = useRef<Slider | null>(null);

  const [settings] = useState({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    focusOnSelect: false,
    accessibility: false,
    mobileFirst: true,
         
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, 
          slidesToScroll: 1, 
          infinite: true,
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        }
      }
    ]
  });

  const testimonials = [
    {
      name: "Mr Belba Ngoy",
      image: attendee,
      feedback: "Always a remarkable experience for my team and myself",
    },
    {
      name: "Mr Belba Ngoy",
      image: attendee,
      feedback: "Always a remarkable experience for my team and myself",
    },
    {
      name: "Mr Belba Ngoy",
      image: attendee,
      feedback: "Always a remarkable experience for my team and myself",
    },
    ...Array(16).fill({
      name: "Mr Belba Ngoy",
      image: attendee,
      feedback: "Always a remarkable experience for my team and myself",
    }),
  ];

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="py-12 px-[5%]">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-5xl font-bold">
          What Do Our Attendees Have To Say?
        </h2>
        <p className="text-gray-500 text-lg mt-2">Well See For Yourself!</p>

        <div className="flex gap-2 justify-end">
          <button
            onClick={handlePrev}
            className="flex justify-center hover:bg-primaryColor transition duration-300 items-center border border-primaryColor rounded-full w-[5rem] h-[5rem] p-3"
          >
            <ArrowLeft size={32} />
          </button>
          <button
            onClick={handleNext}
            className="flex justify-center hover:bg-primaryColor transition duration-300 items-center border border-primaryColor rounded-full w-[5rem] h-[5rem] p-3"
          >
            <ArrowRight size={32} />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <Slider
          ref={sliderRef}
          {...settings}
          className="flex flex-col justify-center md:flex-row md:space-x-8 overflow-hidden px-10"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex justify-center text-center max-w-xs"
            >
             <div className="px-[5rem]">
             <div className="w-32 h-32 rounded-full border-4 border-purple-600 p-2">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
             </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="mt-2 text-gray-700 text-sm text-balance">{testimonial.feedback}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AttendeesComment;
