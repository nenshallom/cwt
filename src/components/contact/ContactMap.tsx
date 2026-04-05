export default function ContactMap() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER AREA */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="font-syne text-sm font-bold uppercase tracking-wider text-brand-purple bg-brand-purple/10 w-fit mb-4 mx-auto py-2 px-3 rounded-lg">
            Our Location
          </h2>
          <h3 className="font-syne text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Find Us on the Map
          </h3>
        </div>

        {/* MAP CONTAINER */}
        <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden rounded-3xl shadow-lg border border-gray-100 bg-gray-100">
          {/* This is a standard Google Maps embed iframe pointing to Lagos, Nigeria. 
            replace the src URL with the specific Google Business map embed link! 
          */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.4593267597!2d3.2839595500000003!3d6.5243793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>

      </div>
    </section>
  );
}