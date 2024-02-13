import { shoe8 } from "../assets/images";
import Button from "../components/Button";
function SuperQuality() {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-col">
        <h2 className="mt-10 font-palanquin capitalize lg:max-w-lg text-4xl font-bold">
          We Provide You
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality</span>
        </h2>
        <p className="info-text mt-4 lg:max-w-lg ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque qui
          porro ad incidunt magnam, reprehenderit vitae repellat unde soluta.
          Alias inventore odit consectetur voluptate tempora omnis quis magni!
          Exercitationem autem esse voluptas nemo iste corrupti placeat quasi!
          Voluptas, a ipsam!
        </p>
        <p className="mt-6 info-text  lg:max-w-lg  ">
          Our Dedication to detail and excellense ensures your satisfactions.
        </p>
        <div className="mt-11 ">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" className="object-contain" width={570} height={522} />
      </div>
    </section>
  );
}

export default SuperQuality;
