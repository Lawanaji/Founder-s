import { ArrowLeft, ArrowRight} from "@phosphor-icons/react";
import attendee from '../../assets/img/Ellipse 309.png'
const AttendeesComment = () => {
  const testimonials = [
    {
      name: "Mr Belba Ngoy",
      image:attendee, 
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
  ];

  return (
    <div className="py-12 px-[5%]">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-5xl font-bold">
          What Do Our Attendees Have To Say?
        </h2>
        <p className="text-gray-500 text-lg mt-2">Well See For Yourself!</p>

       <div className="flex gap-2 justify-end">
       <button className="flex justify-center hover:bg-primaryColor transition duration-300  items-center border border-primaryColor rounded-full w-[5rem] h-[5rem] p-3">
          <ArrowLeft size={32} />
        </button>
        <button className="flex justify-center hover:bg-primaryColor transition duration-300  items-center border border-primaryColor rounded-full w-[5rem] h-[5rem] p-3">
          <ArrowRight size={32} />
        </button>
       </div>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <div className="flex  flex-col md:flex-row  md:space-x-8 overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-xs"
            >
              <div className="w-32 h-32 rounded-full border-4 border-purple-600 p-2">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="mt-2 text-gray-700 text-sm">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default AttendeesComment;
