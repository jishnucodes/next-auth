import DraggablePatientList from "@/components/patient/DraggablePatientList";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Patient List</h1>
      <DraggablePatientList />
    </main>
  );
}
