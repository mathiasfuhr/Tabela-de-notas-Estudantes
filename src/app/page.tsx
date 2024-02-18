import { StudantsTable } from "@/components/StudentsTable";
import { students } from "@/data/studentes";

const Page = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl mb-5">Lista de Estudantes</h1>
      <StudantsTable students={students} />
    </div>
  );
};

export default Page;
