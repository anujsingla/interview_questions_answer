import { ChangeEvent, useEffect, useState } from "react";
import { ReactUseEffectDependencyChild } from "./ReactUseEffectDependencyChild";

interface IDetails {
  name: string;
  details: {
    rollNo: number;
  };
}

export function ReactUseEffectDependency() {
  const [count, setCount] = useState(0);
  const [details, setDetails] = useState<IDetails>({
    name: "",
    details: { rollNo: 7 },
  });
  const increaseCount = () => setCount(count + 1);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDetails({
      ...details,
      name: event?.target.value,
    });
  };
  useEffect(() => {
    console.log("useEffect count", count);
  }, [count]);
  useEffect(() => {
    console.log("useEffect details", details);
  }, [details]);
  return (
    <div>
      Count: {count}
      <div>
        <button onClick={increaseCount}>Increase count</button>
      </div>
      <div>
        <input value={details.name} type="text" onChange={onChange} />
      </div>
      <ReactUseEffectDependencyChild details={details} />
      <ReactUseEffectDependencyChild
        details={{
          name: "Anuj",
          details: { rollNo: 7 },
        }}
      />
    </div>
  );
}
