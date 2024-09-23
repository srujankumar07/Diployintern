import React, { useState } from "react";

const testimonials = [
  {
    name: "Robert A. Voltaire",
    title: "Store link",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/97/John_Cena_2024.jpg",
    review:
     "Printify has transformed my e-commerce business! The quality of their products is consistently impressive. I can't imagine running my store without them!",
  },
  {
    name: "Quinten Barney",
    title: "Etsy Merchant",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Randy_Orton_April_2018.jpg/800px-Randy_Orton_April_2018.jpg",
    review:
     "The integration with my Shopify store was seamless and hassle-free. It’s a game-changer for dropshipping! My sales have significantly increased since using Printify.",
  },
  {
    name: "Nikki",
    title: "Store link",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Triple_H_November_2017.jpg/800px-Triple_H_November_2017.jpg",
    review:
      "I love the variety of customizable products available. It makes branding so much easier and more personal. My customers appreciate the unique options!",
  },
  {
    name: "April Showers",
    title: "Store link",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Dwayne_%22The_Rock%22_Johnson_Visits_the_Pentagon_%2841%29_%28cropped%29.jpg",
    review:
      "Customer service is top-notch! They were quick to help me resolve an issue with my order. I felt supported every step of the way.",
  },
  {
    name: "Spencer",
    title: "Store link",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Dave_Bautista_Photo_Op_GalaxyCon_Minneapolis_2019.jpg/800px-Dave_Bautista_Photo_Op_GalaxyCon_Minneapolis_2019.jpg",
    review:
      "Fast shipping and great quality prints keep my customers coming back. Their attention to detail is commendable. I’m thrilled with the results!",
  },
  {
    name: "Brett and Kyle",
    title: "Store link",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/John_Cena_and_Nikki_Bella_at_SXSW_Red_Carpet_premiere_of_BLOCKERS_%2826876913048%29_%28cropped%29.jpg/800px-John_Cena_and_Nikki_Bella_at_SXSW_Red_Carpet_premiere_of_BLOCKERS_%2826876913048%29_%28cropped%29.jpg",
    review:
     "Printify's user-friendly interface makes it easy to create and manage my designs. I can focus more on marketing my products. Highly recommend for any dropshipper!",
  },
];

const TestimonialCard = ({ image, name, title, review }) => (
  <div className="flex-shrink-0  w-full lg:w-1/3 p-4">
    <div className="h-full p-6 rounded-xl text-center bg-gray-100">
      <img
        alt="testimonial"
        className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
        src={image}
      />
      {/* Limiting the review to 4 lines */}
      <p className="leading-relaxed line-clamp-4">{review}</p>
      <div className="flex justify-center mt-4">
        {/* Star Ratings */}
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            fill="currentColor"
            stroke="currentColor"
            className="w-4 h-4 text-yellow-400"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
        {name}
      </h2>
      <p className="text-gray-500">{title}</p>
    </div>
  </div>
);

const Homepage7 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonialsPerPage = 3;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerPage);

  const scrollLeft = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  const scrollRight = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  const getVisibleTestimonials = () => {
    const startIndex = currentSlide * testimonialsPerPage;
    return testimonials.slice(startIndex, startIndex + testimonialsPerPage);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="relative px-12">
          {/* Left Scroll Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white px-4 py-2 rounded-full z-10"
          >
            &lt;
          </button>

          {/* Testimonial Cards */}
          <div className="flex flex-wrap justify-center">
            {getVisibleTestimonials().map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white px-4 py-2 rounded-full z-10"
          >
            &gt;
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-2 rounded-full ${
                index === currentSlide ? "bg-indigo-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Homepage7;
