import { useEffect } from "react";
import { useData } from "./context";

const Form = () => {
  useEffect(() => {
    impostaCibi();
  });
  const { peso, setPeso, percento, setPercento, impostaCibi } = useData();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mt-5">
      <form className="" onSubmit={handleSubmit}>
        <label htmlFor="peso" className="text-xs block">
          Your cat weight (in kg)
        </label>
        <input
          type="number"
          name="peso"
          id="peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          step="0.1"
          min="0.5"
          max="10"
          className="mt-5"
        />
        <div className="mt-5 flex justify-center gap-3">
          <label htmlFor="percento">wet</label>
          <input
            type="range"
            name="percento"
            id="percento"
            value={percento}
            onChange={(e) => setPercento(e.target.value)}
          />
          <label htmlFor="percento">dry</label>
        </div>
      </form>
    </div>
  );
};
export default Form;
