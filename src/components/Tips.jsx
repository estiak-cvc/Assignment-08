export default function Tips() {
  return (
    <div className="py-12 bg-base-200 text-center">
      <h2 className="text-2xl font-bold">📌 Learning Tips</h2>

      <div className="mt-6 grid md:grid-cols-3 gap-6 px-6">
        <div className="p-4 shadow rounded bg-base-100">
          ✔ Study daily
        </div>
        <div className="p-4 shadow rounded bg-base-100">
          ✔ Practice projects
        </div>
        <div className="p-4 shadow rounded bg-base-100">
          ✔ Manage time
        </div>
      </div>
    </div>
  );
}