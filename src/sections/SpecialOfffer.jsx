import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

function SpecialOfffer() {
  return (
    <section className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="special offer" width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className="flex flex-col">
        <h2 className="mt-10 font-palanquin capitalize lg:max-w-lg text-4xl font-bold">
          <span className="text-coral-red">Special</span> Offer
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
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOfffer