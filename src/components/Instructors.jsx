import InstructorCard from "./InstructorCard";

const instructors = [
  {
    name: "John Doe",
    expertise: "Web Development",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Sarah Lee",
    expertise: "UI/UX Design",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "David Kim",
    expertise: "Data Science",
    image: "https://i.pravatar.cc/150?img=3",
  },
];

export default function Instructors() {
  return (
    <div className="py-12 text-center">
      <h2 className="text-2xl font-bold"></h2>

      <div className="grid md:grid-cols-3 gap-6 mt-6 px-6">
        {instructors.map((ins, i) => (
          <InstructorCard key={i} ins={ins} />
        ))}
      </div>
    </div>
  );
}