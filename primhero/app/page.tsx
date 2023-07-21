import Image from "next/image";
import { services } from "@component/utils/data";
import pic from "../assets/services/picEmployee.svg";
import Landing from "@component/components/Landing/Landing";
import Testimonial from "@component/components/Testimonial/Testimonial";
import Us from "@component/components/Us/Us";
import Iso from "@component/components/Iso/Iso";
import Tutorials from "@component/components/Tutorials/Tutorials";
import Clients from "@component/components/Clients/Clients";
import ContactForm from "@component/components/Contact/Contact";
import Footer from "@component/components/Footer.tsx/Footer";
import Navbar from "@component/components/Nabvar/Navbar";

export default function Home() {
  return (
    <main className="flex font-sans min-h-screen flex-col items-center justify-between overflow-hidden  bg-white">
      <header className="fixed top-0 w-full z-50 bg-primary h-16 font-sans">
        {" "}
        <Navbar />
      </header>
      {/* seccion principal */}
      <section className=" backdrop-filter backdrop-blur-3xl h-screen w-full bg-image1 bg-no-repeat bg-cover bg-right-bottom  sm:bg-center pl-4 -mt-10 sm:pl-10 flex flex-col justify-center ">
        <Landing />
      </section>
      {/* seccion testimonial */}
      <section className=" w-full flex flex-col justify-center bg-white align-middle font-sans">
        <Testimonial />
      </section>

      {/* seccion servicios */}
      <section className="h-full pt-8 flex flex-col bg-secondary leading-5">
        <div className="flex flex-col">
          {services.map((service, index) => (
            <div className="w-full" key={index}>
              <article className="  text-black flex gap-4 px-10  mt-8 mb-8">
                <Image
                  src={service.icon}
                  alt="icon"
                  width={50}
                  height={50}
                  className="self-start"
                />
                <div className="flex flex-col tracking-tighter ">
                  <h3 className="font-extrabold">{service.title}</h3>
                  <p className="pt-4 text-sm font-semibold">{service.description}</p>
                </div>
              </article>
              {index !== services.length - 1 && (
                <hr className="w-10/12 mx-auto h-[2px] px-20 bg-white  round-full" />
              )}
            </div>
          ))}
          <aside>
            <Image src={pic} alt="pic" width={500} height={500} />
          </aside>
        </div>
      </section>

      {/* seccion nosotros */}
      <section className="h-full flex flex-col bg-white py-8 pt-12 ">
        <Us />
      </section>

      {/* seccion iso */}
      <section className="w-full bg-secondary flex flex-col font-semibold items-center gap-8 text-black justify-evenly py-16 text-sm text-center">
        <Iso />
      </section>

      {/* seccion tutoriales */}
      <section className="w-full h-hull py-20 bg-black flex flex-col item-center align-middle justify-center">
        <Tutorials />
      </section>

      {/* secccion clientes */}
      <section className="w-full py-8 h-hull bg-[#ebebeb] flex flex-col item-center align-middle justify-center">
        {" "}
        <Clients />
      </section>

      {/* seccion contacto */}
      <section className="w-full py-8 h-hull bg-white flex flex-col item-center align-middle justify-center">
        <ContactForm />
      </section>

      <Footer />
    </main>
  );
}
