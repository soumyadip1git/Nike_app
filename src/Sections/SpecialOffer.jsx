import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center
    gap-10 max-container max-xl:flex-col-reverse">
    <div className="flex-1">
      <img
        src={offer}
        width={773}
        height={687}
        className="object-contain w-full"
      />
    </div>

    <div className="flex flex-1 flex-col">
      <h2 className="font-palanquin capitalize
      text-4xl  font-bold lg:max-w-lg">
        <span className="text-coral-red"> Special </span> Offer
      </h2>
      <p className="mt-4 info-text lg:max-w-lg">
      Embark on a shopping journey that redefines your experience
      with unbeatable deals.</p>
      <p className="mt-6 info-text lg:max-w-lg">Navigate a realm 
      possibilities design to fullfill your unique desire
      surpassing the loftiest expectations</p>
      <div className="mt-11 flex flex-wrap gap-4"> <Button label="View Details"
        /> 
        <Button label="Learn more"
        backgroundColor="bg-white"
        borderColor="border-slate-gray"
        textColor="text-slate-grey"

        />
      </div>
    </div>
    </section>
  )
}

export default SpecialOffer