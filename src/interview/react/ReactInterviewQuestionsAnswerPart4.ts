/*
https://github.com/sudheerj/reactjs-interview-questions/blob/master/README.md#what-is-react

React Interview Questions and answers

Question: How can we pass props to a low level child component?

Answer: There are 2 ways to pass props to a child component. In react application,
data is passed top to dowm from parent to child component via props.

1. Prop drilling
2. Context

Prop drilling:
When we pass props from parent to child component via props. This pattern
allow you to pass data through any number od levels. It is not a good practice
to pass data from parent to child manually over and over down each level
of components. We should pass only one to two level, not more than that. We
can pass it but it is not a good practice. If we need to pass it then we should
use Context.

Context:
Context provides a way to share values between different levels of the
components true without explicitly pass the prop through every level of
the tree. It is used to share data between components. We can easily
update the context value by function and It will automatically upate the
component in the UI.
Example: We can pass user authenication, preferred language or many more.
This is just the example.

References:
https://youtu.be/ca7gq6mRC-E
https://youtu.be/B5oDD66v688
https://reactjs.org/docs/context.html

Question: What is “the data flows down” statement in React

Answer: In React, state is managed by component only. It is not accessible
to any component other than the one that owns and sets it.
We can pass the state to child component via props. This approach is called
top-down or unidirectional data flow that state can only affect child
components in the tree hierarchly when passed down as props.

passing the state as props
<FormattedDate date={this.state.date} />;

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

Question: How do you memoize a component?

Answer: To improve user interface performance, React offers a high-order
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

By Default, It will only shallowly compare complex object in the props object.
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

Resources:
https://reactjs.org/docs/react-api.html#reactmemo


Question: What is difference between shallow and deep object comparison?

Answer: 

Question: What is dependencies, devdependencies, peerdependencies?

Answer: 


*/

export {};
