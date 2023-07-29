import Image from "next/image";
import { services } from "@component/utils/data";
import pic from "../../assets/services/picEmployee.svg";

export default function Services() {
  return (
    <div className="flex flex-col md:flex-row w-full sm:h-[600px] ">
      <div className="flex flex-col  w-full md:w-1/2 justify-center items-center align-middle overflow-y-scroll px-20 ">
        {services.map((service, index) => (
          <div
            className="w-full flex flex-col justify-center items-start align-middle py-4 "
            key={index}
          >
            <article className="  text-black flex gap-4 px-10  mt-8 mb-8">
              <Image src={service.icon} alt="icon" width={50} height={50} className="self-center" />
              <div className="flex flex-col tracking-tighter md:pl-10 ">
                <h3 className="font-extrabold">{service.title}</h3>
                <p className="pt-4 text-md font-semibold">{service.description}</p>
              </div>
            </article>
            {index !== services.length - 1 && (
              <hr className="w-10/12 mx-auto h-[2px] px-20 bg-white  rounded-full" />
            )}
          </div>
        ))}
      </div>
      <aside className="md:w-1/2">
        <div className="w-full  ">
          <Image src={pic} alt="pic" width={500} height={500} className="   object-cover w-full " />
        </div>
      </aside>
    </div>
  );
}
