
import ImagePlaceholder from "./ImagePlaceholder";

const therapists = [
  {
    name: "Emma",
    id: 1,
    img: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Monica",
    id: 2,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60"
  },
  {
    name: "Sandra",
    id: 3,
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60"
  },
  {
    name: "John",
    id: 4,
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=60"
  },
  {
    name: "Amara",
    id: 5,
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop&q=60"
  }
];

const Therapists = () => {
  return (
    <div id="therapists" className="py-16">
      <div className="text-center mb-10">
        <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">MEET OUR TEAM</h3>
        <h2 className="text-2xl font-bold">Our Highly Experienced Relationship Therapists</h2>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6">
        {therapists.map((therapist) => (
          <div key={therapist.id} className="text-center">
            <div className="w-32 h-32 overflow-hidden rounded-lg mb-4 mx-auto bg-gray-100 shadow-md">
              {therapist.img ? (
                <img 
                  src={therapist.img} 
                  alt={therapist.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <ImagePlaceholder text={therapist.name} />
              )}
            </div>
            <p className="text-sm font-medium">{therapist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Therapists;
