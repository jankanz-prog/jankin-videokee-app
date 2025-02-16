import React from 'react';
import '../styles/testimonials.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "random dood",
      role: "Professional Autistic",
      image: "src/assets/images/profile-pictures/randomdood.jpg",
      quote: "Jankin Videoke has transformed my karaoke experience. The sound quality is exceptional, and the song selection is incredible!"
    },
    {
      id: 2,
      name: "random guy",
      role: "Music Enthusiast",
      image: "src/assets/images/profile-pictures/randomguy.jpg",
      quote: "I've tried many karaoke apps, but Jankin Videoke stands out with its user-friendly interface and amazing features."
    },
    {
      id: 3,
      name: "random gal",
      role: "Karaoke Host",
      image: "src/assets/images/profile-pictures/randomgal.png",
      quote: "As a karaoke host, I can confidently say that Jankin Videoke is the best platform I've used. My guests love it!"
    }
  ];

  return (
    <section className="testimonials-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">What Our Users Say</h2>
        <div className="row">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-md-4 mb-4">
              <div className="testimonial-card">
                <div className="testimonial-image-wrapper">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-image"
                  />
                </div>
                <div className="testimonial-content">
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <h5 className="testimonial-name">{testimonial.name}</h5>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
