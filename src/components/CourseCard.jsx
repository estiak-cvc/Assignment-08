import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="h-24 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{course.title}</h2>
        <p>{course.instructor}</p>
        <p>⭐ {course.rating}</p>

        <button className="btn btn-primary mt-3">
          View Details
        </button>
      </div>
    </div>
  );
}