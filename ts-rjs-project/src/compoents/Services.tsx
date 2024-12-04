import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      title: "Overview",
      description:
        "At Blemense Technologies, we are a dynamic and forward-thinking software development startup with a passion for turning innovative ideas into cutting-edge digital solutions. Established with the mission to transform businesses and improve lives through technology, we are on a relentless pursuit of excellence in the world of software development.",
    },
    {
      title: "Our Vision",
      description:
        "Our vision is to be a leading force in shaping the future of technology. We strive to create software solutions that not only meet our clients' needs but also anticipate their future requirements. By fostering a culture of innovation and collaboration, we aim to be at the forefront of technological advancements, driving positive change across industries.",
    },
    {
      title: "Our Mission",
      description:
        "Our mission is to empower businesses and individuals with transformative software solutions. We are committed to providing top-tier software development services that enable our clients to enhance their efficiency, productivity, and competitiveness in today's rapidly evolving digital landscape.",
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto text-center px-4">
       
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
