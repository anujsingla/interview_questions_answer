/*
https://github.com/sudheerj/reactjs-interview-questions/blob/master/README.md#what-is-react

React Interview Questions and answers

Question: What is React?

Answer: React is an open-source javascript library which helps us to make web 
and mobile apps. It is used to build user interfaces (UI) on the front end.
It is the view layer of an MVC application (Model view controller).
It support server-side and client-side rendering.
We can easily create custom component and reused at multiple places.
React also streamlines how data is stored and handled using state and props.

Question: What is JSX?

Answer: JSX stands for Javascript XML. It is simply a syntax extension of Javascript
It allows us to directly write HTML in React (within Javascript code).
JSX produce react elements.
After compilation, JSX is always going to get compiled to React.createElement
via Babel.

https://reactjs.org/docs/introducing-jsx.html
https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABAIRFKDEAoDeiCGAJoQGIBOMApmIYgL4CUiOAUIomZVCGUlm-0QAeAEZoMSBAGEANjAgBrALw4ipCtUJ0AfAEFiiclRpCA9GPQJtAhizotQkWJgCqAZ0plseMPgC2lAA0BMRGmvRMrOyc3LzYAuxChDAAbtaCgkIADto4vgF0ZjkJmaiWSGphNCqVGjR0pumZpslpNnYsLELunoj5lEoARPhgIABWg-y1xoQqWExK2n0gMjJ0iI1AA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.16.12&externalPlugins=&assumptions=%7B%7D

Question: What is the difference between Element and Component?

Answer: 
Element:
A React Element is an object representation of a DOM node. React element
isn't actually the thing you will see on your screen. Instead it is just
an object representation of it.
There are a few reason for this:
Javascript objects are lightweight.
React can create and destroy these elements without too much overhead.
React can easily compare between 2 objects and see what changed.
React can update the actual DOM only where those changes occurred.
It will helps to increase the performance because we only changes what is required.

To create React element, use can use createElement method.
https://reactjs.org/docs/react-api.html#createelement

const element = React.createElement(
  'div',
  {id: 'login-btn'},
  'Login'
)
It takes 3 arguments.
1 - Tag name like div
2 - Attributes you want the element to have. {id: 'login-btn'}
3- The contents or the children of the element. 'Login'.

The createElement return an object that looks like this:

{
  type: 'div',
  props: {
    children: 'Login',
    id: 'login-btn'
  }
}

When we render this using ReactDOM.render in the DOM, it looks like this:
<div id='login-btn'>Login</div>

Component:
A component is a function or Class which optionally accepts input and return
a React element.

const Button = ({ onLogin }) =>
  <div id={'login-btn'} onClick={onLogin}>Login</div>

This JSX get compiled to a React.createElement() function tree:
const Button = ({ onLogin }) => React.createElement(
  'div',
  { id: 'login-btn', onClick: onLogin },
  'Login'
)

Reference: https://ui.dev/react-elements-vs-react-components/

Question: How to create components in React?

Answer: We can create component in two ways:

Function Component.

function Greeting({ message }) {
  return <h1>{`Hello, ${message}`}</h1>
}

Class Component:

class Greeting extends React.Component {
  render() {
    return <h1>{`Hello, ${this.props.message}`}</h1>
  }
}

After 16.8 React version, It is always recommended to use function components
because we can use hooks.

Question: What is state in React?

Answer: State is a plain javascript object that holds some information
that may change over the lifetime of the component. It is managed in the
component (Just like any variable declared in a function). When state changes,
the component responds by re-rendering.

Example:
function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}

https://reactjs.org/docs/faq-state.html

Question: What is props in React?

Answer: Props are input to components (similar to function parameters). Props
can be single values or objects containing a set of values that are passed
to the component.
Props holds information and When props changed, the component responds by
re-rendering.
Props are passed from parent component to child component.

Function component:

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

Class component:

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

<Welcome name="Sara" />

Question: What is the difference between state and props?

Answer: Props and state are plain javascript objects.
Both holds the information
Both props and state changes trigger a render update.
Props get passed to the component same like Function parameters. Component
can not change its props.
State is managed within component same like variable declared within a function.
Component can change its state.

Question: What are inline conditional expressions?

Answer: We can use inline conditional expression in JSX to render UI elements.
we can use with curly braces {} and use JS logical operator &&

{isFetching && <Spinner>}
{isFetching ? <Spinner> : <h1>Comments</h1>}
You have {messages.length} unread messages.

Question: What is "key" prop and what is the benefit of using it in arrays of 
elements?

Answer: A key is a special string attribute we should include when creating
arrays of elements. Key prop help react identify which items have changes,
are added or are removed.
React show warning message in the console if we don't add key prop is not 
present in the array of list.

const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
)
Youtube video to learn more: https://youtu.be/AMlJdo0urYM

Question: How to create refs and use of refs?

Answer: React ref helps us to manage the reference a DOM element. This give
us the ability to modify or change the element or an instance of a component.
We can access elements/components without state updates or rerenders.

As per the react documentation we should only use ref for these three possible
use cases:

- Managing focus, text selection or media playback.
Ref help us to interact with the DOM API and perform actions like
getting value from the input element, focus the input or manage media element.

- Imperative animations 
It require access to the responsible DOM node to manipulate the target elements.
Ref attributes provide access of the elements at different part of the app.

- Integrating with third-party DOM libraries:
Some library need DOM element access to perform operations like map, editors,
image manipulation tools, etc. These component need DOM element access and
we use ref for it.

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

Youtube video for reference: https://youtu.be/1rfxnJ38dWY

Question: What are forward refs?

Answer: Forward ref helps to pass ref through a component to one of its
children. 

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;

Component using FancyButton can get a ref to the button DOM node and access
it if necessary.

Question: What is Virtual DOM and how it works?

Answer: DOM -> document object model.
It is a structured representation of the html elements that are present
in the web app. DOM represent the entire UI of your app. The DOM is
represented as a tree data structure. We can easily update the content in 
the dom with javascript.

const element = document.getElementById('some-id');
element.innerValue = 'updated value';

We can easily access the dom element with the help of `getElementById()` javascript
function. When we make changes in the app state it will update the UI.

The problem come when we need to update the large application which has 1000
elements in the UI.
If we make any changes then DOM will update and UI components have to be
re-rendered.
When we update the dom, then these things happen:

- The browser parse the HTML to find the node with ID.
- It remove the child element of specific element.
- Update the DOM element with the new value
- Recalculates the CSS for the parent and child nodes.
- Update the layout.
- Finally, update the UI in the browser.

If you see, there are lot of things happen when we directly change in the UI.

Virtual DOM - It is lightweight Javascript object which is copy of Real DOM.

Updating virtual DOM in ReactJs is faster because ReactJs uses:
- Efficient diff algorithm.
- Batched update operation.
- Efficient update of subtree.

When we call setState() or update state, component rerender. Reactjs creates
the whole virtual DOM from scratch.
React maintains two virtual DOM, one with the updated state virtual DOM and
other with the previos state virtual dom.
React use diff algorithm compare both the virtual dom to find the minimum number
of steps to update the real dom.

Reference:
https://medium.com/@happymishra66/virtual-dom-in-reactjs-43a3fdb1d130
https://www.geeksforgeeks.org/reactjs-virtual-dom/

*/
