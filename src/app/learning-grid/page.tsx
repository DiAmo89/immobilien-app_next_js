export default function LearningGrid() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-2">
        <div className="bg-amber-300 col-span-3 col-start-2 col-end-4">1</div>
        <div className="bg-amber-300 col-span-4">2</div>
        <div className="bg-amber-300 col-span-4 md:col-span-2">3</div>
        <div className="bg-amber-300 col-span-4 md:col-span-2">4</div>
      </div>
      <h2>Task</h2>
      <div className="grid grid-cols-4 gap-2">
        <div className="bg-green-200 col-span-4">1</div>
        <div className="bg-green-200 col-span-4 md:col-span-2 lg:col-span-4">
          2
        </div>
        <div className="bg-green-200 col-span-4 md:col-span-2 lg:col-span-4">
          3
        </div>
      </div>
    </div>
  );
}