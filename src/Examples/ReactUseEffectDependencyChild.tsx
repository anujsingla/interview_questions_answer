import { useEffect } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";

interface IProps {
  details: {
    name: string;
    details: {
      rollNo: number;
    };
  };
}

export function ReactUseEffectDependencyChild(props: IProps) {
  useEffect(() => {
    console.log("useEffect child component", props.details);
  }, [props.details]);

  useDeepCompareEffect(() => {
    console.log("useDeepCompareEffect child component", props.details);
  }, [props.details]);

  return <div>Child component: {props.details.name}</div>;
}
