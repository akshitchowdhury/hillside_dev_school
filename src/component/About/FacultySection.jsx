export default function FacultySection() {
    const facultyMembers = [
      {
        name: "Padmasri Raghu",
        position: "Preschool",
        image: "https://ihs.edu.in/wp-content/uploads/2019/08/dean-v3.jpg",
        qualifications: "B.Com, D.Ntt, D.Mtt, D-I Math, D-Dino art, D.Jollyphonics",
        experience: "25 years",
        joining: "2014",
      },
      {
        name: "Anuradha Ramachandran",
        position: "Primary School and Coordinator of 1-5 English",
        image: "https://ihs.edu.in/wp-content/uploads/2019/08/suman-bolar.jpg",
        qualifications: "B.Com, B.Ed",
        experience: "19 years",
        joining: "2008",
      },
      {
        name: "Irene Daniel",
        position: "Middle School",
        image: "https://t3.ftcdn.net/jpg/04/48/03/56/360_F_448035690_o2uvf0WcCJcOkjoiDhCqHZdqoi8KzQzO.jpg",
        qualifications: "M.A. (Eng), B.Ed (Hindi & English)",
        experience: "25 years",
        joining: "2018",
      },
      {
        name: "Priyanka Maheshwari",
        position: "High School",
        image: "https://ihs.edu.in/wp-content/uploads/2023/06/vice-principal.jpg",
        qualifications: "M.Sc (Maths), B.Ed",
        experience: "12 years",
        joining: "2013",
      },
    ];
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-5xl font-serif text-pink-950 text-center mb-8">Section Heads</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((faculty, index) => (
            <div key={index} className="flex flex-col items-start text-left">
            <div className="w-full aspect-square bg-yellow-400 mb-4 group overflow-hidden">
  <img
    src={faculty.image}
    alt={faculty.name}
    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
  />
</div>

              <h3 className="text-xl text-pink-950 font-semibold mb-1">{faculty.name}</h3>
              <p className="text-gray-600 mb-2">{faculty.position}</p>
              <div className="text-sm flex flex-col gap-2">
                <p><strong>Qualifications:</strong> {faculty.qualifications}</p>
                <p><strong>Teaching experience:</strong> {faculty.experience}</p>
                <p><strong>Year of joining:</strong> {faculty.joining}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }