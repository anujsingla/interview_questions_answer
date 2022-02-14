import { isEqual } from "lodash";
import { memo, useCallback, useState } from "react";

interface IProps {
  firstName: string;
  lastName: string;
  componentName: string;
  onClick: () => void;
  details: { rollNo: number; subject: string };
}

function UserDetails(props: IProps) {
  console.log("Component Name", props.componentName);
  return (
    <div>
      <p>Component Name: {props.componentName}</p>
      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.lastName}</p>
      <button onClick={props.onClick}>Click button</button>
    </div>
  );
}

function isEqualProps(prevProps: IProps, nextProps: IProps) {
  return isEqual(prevProps, nextProps);
}

export const UserDetailsMemoize = memo(UserDetails, isEqualProps);

export function MemoExample() {
  const [count, setCount] = useState(0);

  const onClick = useCallback(() => {
    console.log("on click function");
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <UserDetailsMemoize
        firstName="Anuj"
        lastName="Singla"
        componentName="UserDetailsMemoize"
        onClick={onClick}
        details={{ rollNo: 7, subject: "React" }}
      />
      <UserDetails
        firstName="Anuj"
        lastName="Singla"
        componentName="UserDetails"
        onClick={onClick}
        details={{ rollNo: 7, subject: "React" }}
      />
    </div>
  );
}

/*
- What is React.memo
- Examples
- When to use React.memo
- When not to use React.memo


To improve user interface performance, React offers a high-order
component "React.memo()". We need to wrap a component, React memorizes the
rendered output of the wrapped component and skip unnecessary renderings.

While updating DOM, React first render the component and compare result with
the previous render. If the render results are different, React Updates the
DOM. Comparsion between previous and new render component is very fast. But
we can speed up the process.

When we wrapped our component in the "React.memo()" component, React renders
the component and memoizes the result.
While updating DOM, If component props don't change then React reuses the
memoized result and skipping the next rendering.
If component props change then React render the component and memoizes the
latest component.

React.memo only check for prop changes. It will not check for state updates,
useReducer or useContext. It will still rerender when state or context change.

By Default, It will only shallow compare complex object in the props object.
If you want to control over the comparsion, you can provide custom comparison
function as a second argument.
It is only used for performance Optimization.

React.memo used for function component.
React.PureComponent used for class component.

Without custom comparison function:

const MyComponent = React.memo(function MyComponent(props) {
  component logic
});

With custom comparison function:

function MyComponent(props) {}
function areEqual(prevProps, nextProps) {}
export default React.memo(MyComponent, areEqual);

When to use React.memo:
- Pure functional component
- Component should render with same props or minor props changes
- Renders frequently
- Medium or large component contains a decent amount of UI
elements to reason props equality check.

When not to use React.memo:

- React.memo explicitly cache the component which means it store the result
(VDOM) in memory. If we do this too many or big components this lead to
more memory consumption. You should be careful while memoizing lareg component.

- Do not use React.memo if component props change frequesntly. It creates 
additional overhead which compares the props with the memoized one. It will
not affect performance too much but you miss the final goal of React.memo is made
for.

- Don't use memoization if you can't quantify the performance gains.

Example with different scenarios:
Basic React.memo scenarios
Dealing with objects.
Dealing with functions.

*/
