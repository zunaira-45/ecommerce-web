import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "David Smith",
      feedback: "This is the best online store I have ever shopped from! Great products and fantastic service.",
      role: "Customer",
    },
    {
      id: 2,
      name: "Jane Smith",
      feedback: "I love the quality and variety of bags. Fast delivery and excellent customer support.",
      role: "Customer",
    },
    {
      id: 3,
      name: "Mark Wilson",
      feedback: "My experience was smooth and I will definitely be back for more. Highly recommend this site.",
      role: "Customer",
    },
    {
      id: 4,
      name: "William",
      feedback: "Highly recommended.",
      role: "Customer",
    },
    {
      id: 5,
      name: "Sonalika",
      feedback: "Beautiful dress. I will definitely shop again.",
      role: "Customer",
    },
  ];

  return (
    <section className="bg-gray-300 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Customer Reviews
        </h2>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center"
            >
              <p className="italic text-gray-600 mb-4">
                &quot;{testimonial.feedback}&quot;
              </p>
              <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
