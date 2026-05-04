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
      <h2 className="text-2xl font-bold">🏆 Top Instructors</h2>

      <div className="grid md:grid-cols-3 gap-6 mt-6 px-6">
        {instructors.map((ins, i) => (
          <div key={i} className="card p-4 shadow">
            <img
              src={ins.image}
              className="w-20 mx-auto rounded-full"
            />
            <h3 className="mt-2 font-bold">{ins.name}</h3>
            <p>{ins.expertise}</p>
          </div>
        ))}
      </div>
    </div>
  );
}