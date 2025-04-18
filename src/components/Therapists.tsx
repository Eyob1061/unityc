
import ImagePlaceholder from "./ImagePlaceholder";

const therapists = [
  {
    name: "Emma",
    id: 1
  },
  {
    name: "Monica",
    id: 2
  },
  {
    name: "Sandra",
    id: 3
  },
  {
    name: "John",
    id: 4
  },
  {
    name: "Amara",
    id: 5
  }
];

const Therapists = () => {
  return (
    <div className="py-16">
      <div className="text-center mb-10">
        <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">MEET OUR TEAM</h3>
        <h2 className="text-2xl font-bold">Our Highly Experienced Relationship Therapists</h2>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6">
        {therapists.map((therapist) => (
          <div key={therapist.id} className="text-center">
            <div className="w-20 h-20 overflow-hidden rounded-lg mb-2 mx-auto bg-gray-100">
              <ImagePlaceholder text={therapist.name} />
            </div>
            <p className="text-sm font-medium">{therapist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Therapists;
