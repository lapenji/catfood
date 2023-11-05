import { useData } from "./context";

const Results = () => {
  const { secco, umido } = useData();
  return (
    <div>
      <h1 className="mt-10 text-3xl">YOUR CAT SHOULD EAT</h1>
      <h4 className="mt-2 text-xl">{secco}gr of dry food</h4>
      <h4 className="mt-2 text-xl">{umido}gr of wet food</h4>
    </div>
  );
};
export default Results;
