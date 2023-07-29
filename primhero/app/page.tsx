import Landing from "@component/components/Landing/Landing";
import Testimonial from "@component/components/Testimonial/Testimonial";
import Us from "@component/components/Us/Us";
import Iso from "@component/components/Iso/Iso";
import Tutorials from "@component/components/Tutorials/Tutorials";
import Clients from "@component/components/Clients/Clients";
import ContactForm from "@component/components/Contact/Contact";
import Footer from "@component/components/Footer/Footer";
import Navbar from "@component/components/Nabvar/Navbar";
import Services from "@component/components/Services/Services";

export default function Home() {
  return (
    <main className="flex font-sans min-h-screen w-full flex-col items-center justify-between overflow-hidden  bg-white">
      <header className="fixed top-0 w-full z-50 bg-primary sm:h-16 h-14 font-sans">
        {" "}
        <Navbar />
      </header>
      {/* seccion principal */}
      <section className="sm:mt-16 mt-14">
        {" "}
        <Landing />
      </section>
      {/* seccion testimonial */}
      <section className=" w-full flex flex-col justify-center bg-white align-middle font-sans sm:flex-row">
        <Testimonial />
      </section>

      {/* seccion servicios */}
      <section className="h-full w-full pt-8 sm:pt-0 bg-secondary leading-5" id="servicios">
        <Services />
      </section>

      {/* seccion nosotros */}
      <section className="h-full flex flex-col bg-white py-8 pt-12" id="nosotros">
        <Us />
      </section>

      {/* seccion iso */}
      <section className="w-full bg-secondary flex flex-col md:flex-row font-semibold items-center gap-8 text-black justify-evenly py-20 text-sm text-center">
        <Iso />
      </section>

      {/* seccion tutoriales */}
      <section
        className="w-full h-hull py-20 bg-black flex flex-col item-center align-middle justify-center"
        id="tutoriales"
      >
        <Tutorials />
      </section>

      {/* secccion clientes */}
      <section className="w-full py-8 h-hull bg-[#ebebeb] flex flex-col md:flex item-center align-middle justify-center">
        {" "}
        <Clients />
      </section>

      {/* seccion contacto */}
      <section
        className="w-full py-8 h-full lg:h-[600px] bg-white flex flex-col item-center align-middle justify-center"
        id="contacto"
      >
        <ContactForm />
      </section>

      <Footer />
    </main>
  );
}
