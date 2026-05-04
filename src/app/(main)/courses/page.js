
import CourseCard from "@/components/CourseCard";
import Tips from "@/components/Tips";
import Instructors from "@/components/Instructors";

import courses from "@/data/courses.json";
import Banner from "@/components/Banner";

export default function Home() {
  const topCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <>
      {/* 🎥 Hero */}
      <Banner />

      {/* 🔥 Popular Courses */}
      <div className="py-12 text-center">
        <h2 className="text-2xl font-bold">🔥 Popular Courses</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-6 px-6">
          {topCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* 📌 Tips */}
      <Tips />

      {/* 🏆 Instructors */}
      <Instructors />
    </>
  );
}