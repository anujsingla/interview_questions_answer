/*
https://github.com/sudheerj/reactjs-interview-questions/blob/master/README.md#what-is-react

React Interview Questions and answers

Question: What are the different phases of component lifecycle?

Answer: Every component has lifecycle and every component goes through it like
birth, growth and death of a component. 
React provides serveral methods for different stages and we can perform operation
as per requirement.

There are four phrases:
Mounting, updating, unmounting and Error Handling.

Mouting - Adding nodes to the DOM.
Updating - Altering existing nodes in the DOM.
Unmounting - removing nodes from the DOM.
Error handling - verifying that your code works or not.

class HelloWorld extends React.Component {
   render() {
    return <h1> Hello World </h1> 
   }
}

Mounting - It is like bringing a newborn baby into the world. Nodes
inserted into the DOM. This phrase covers initialization from constructor,
getDerivedStateFromProps, render, componentDidMount lifecycle method.

Updating - The component grow during this phrase. Component grow when we
update the state or props.

Unmounting - This is final stage and in this stage component dies. It is
removed from the DOM. We can perform operations like disconnect DB etc.

Error handling - If our component throw bugs then react component enter
in error handling state.

It is not compulsory component should go on every phrase. It is depend
on the component.


Reference:
https://youtu.be/l3NNSEuh0BE
https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/
https://iq.js.org/questions/react/what-are-the-different-phases-of-component-lifecycle


Question: What are the lifecycle methods of React?

Answer: In the above question we have seen component phrases and react
provide methods for each phrase to perform operations like
In the mouting phase - we can fetch the data from the backend.
In the Update phase - we can update the component or fetch data after props 
or state changes
Unmounting - we can discount DB connect or cleanup process
Error - we can handle the error if something is break in our component
we can log information in the server like call stack.

There are different method for that:
Most useful method for class component:

constructor() - It is first method called as the component is brough to life.
It is called before the component is mounted to the DOM. We initialize state
or bind event handlers methods.

const MyComponent extends React.Component {
  constructor(props) {
   super(props) 
    this.state = {
       points: 0
    }  
    this.handlePoints = this.handlePoints.bind(this) 
    }   
}

render() - We return JSX in the render method. we write HTML or custom 
component. We can return string, elements, number anything which is valid.
After this method, component is mounted to the DOM.

class MyComponent extends React.Component {
   render() {
    return <h1> Hurray! </h1>
   }
}

componentDidMount() - This method is called after component mounted to the
DOM In short - after render method this method will called.
You can fetch the data, update state or modify DOM.

componentDidMount() {
  this.fetchData() 
}

Updating lifecycle method:

When we change the state or props, the component is rerendered, The component
is updated.

getDerivedStateFromProps(props, state) - 
This method calls on Mounting and updating phase. It is invloked right before
calling the render method both on initial mount and on subsequent updates.
It should return an object to update the state or null to update nothing.

  static getDerivedStateFromProps(props, state) { 
     return {
        points: 200 // update state with this
     }
  } 
  no updates
  static getDerivedStateFromProps(props, state) {
    return null
  }

shouldComponentUpdate() - 
This method invoked after getDerivedStateFromProps method is called.
We can control to rerender the component on state or props update.
If we return true then component will rerender and if we return false
then component will not rerender.
It is used for performance optimization measures.

componentDidUpdate(prevProps, prevState) - this method invoked immediately
after updating occurs. This method is not called for the initial render.
In this method, we get previous props and state. We can compare current and
previous state or props and fetch the data from the backend or do operations
as per requirement.


Unmouting Lifecycle method:

componentWillUnmount() - This method is invoked before component is unmounted
and destroyed. We can use this method for cleanup or cancelling network
requests, clean up any subscriptions.

// e.g add event listener
componentDidMount() {
    el.addEventListener()
}

// e.g remove event listener 
componentWillUnmount() {
    el.removeEventListener()
 }

Error Hanlding lifecycle methods:
This method is invoked when something go wrong or errors are thrown.

I have made video on this topic: https://youtu.be/uMbihV3j9OI

React hooks lifecycle methods:

componentDidMount - useEffect(() => {}, []).
componentDidUpdate - useEffect(() => {})
componentDidUpdate - useEffect(() => {}, [somevalue])
ComponentWillUnmount - 
useEffect(() => {
    return () => {
      console.log('componentWillUnmount!');
    };
  }, []);

Image reference:
dan_lifecycle_methods_diagram.png
react_lifecycle_methods.png
replace_lifecycle_with_hooks.png

Thanks Harsh Makadia for images.

Reference:
https://youtu.be/l3NNSEuh0BE
https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/
https://javascript.plainenglish.io/lifecycle-methods-substitute-with-react-hooks-b173073052a

Question: Why React uses className over class attribute?

Answer: class is a keyboard in javascript and JSX is an extension of javascript.
So React team decided to accept class attribute as a className in the element.

<span className={'item main'}>Hello</span>

Question: What are fragments and Why fragments are better than container divs?

Answer: Before fragement, If we want to render multiple elements in the React
then we need to wrap under one DOM node.
After fragement (16.2.0 React release), We can render multiple elements
without wrap them in an extra DOM node. It will not produce any extra
elements in the DOM. It enable us to group multiple components without
introducing any uncessary markup in the rendered HTML.
We should use this when we need it.
As per documentation, Fragement only accept key attribute.

Before fragement example:

<div>
  <Child1></Child1>
  <Child2></Child2>
  <Child3></Child3>
</div>

After fragement example:

<React.Fragment>
  <Child1></Child1>
  <Child2></Child2>
  <Child3></Child3>
</React.Fragment>

Shortend
<>
  <Child1></Child1>
  <Child2></Child2>
  <Child3></Child3>
</>

<dl>
  {items.map(item => (
          <React.Fragment key={item.id}>
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
          </React.Fragment>
    ))}
</dl>

Benefit:
- It will help to avoid extra DOM element in the UI.
- It avoid issues that break layouts like Flexbox or CSS Grid have a 
special parent-child relationships and adding extra divs in the middle
makes it hard to keep the desired layout.

Reference:
https://reactjs.org/docs/fragments.html

Question: What are error boundaries?

Answer: Error boundaries component helps to catch javascript errors anywhere
in their child component, log the errors and displays a feedback UI instead
of the component tree that crashed.

We can create class component as a error boundary with 
componentDidCatch(error, info) or static getDerivedStateFromError() 
lifecycle method.

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error, info) {
    logErrorToMyService(error, info) // log error in the server
  }

  static getDerivedStateFromError(error) {
     return { hasError: true }; // update the state
  }

  render() {
    if (this.state.hasError) {
      return <h1>{'Something went wrong.'}</h1>
    }
    return this.props.children
  }
}

How to use it:

<ErrorBoundary>
  <ParentComponent>
    <Child1></Child1>
    <ErrorBoundary>
      <Child2></Child2>
    </ErrorBoundary>
  </ParentComponent>
</ErrorBoundary>

It will show error if there are any javascript error in the Parent or child
component.

Reference:
https://youtu.be/uMbihV3j9OI
https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries

Question: What is react-dom and ReactDOM object method ReactDOM.render()?

Answer: When we create a React Project, we install react and react-dom package.
react-dom package helps to render the UI to the browser.

ReactDOM: it helps to render component or JSX elements to the DOM. ReactDOM
object has couple of methods and we mostly used render method, which helps
to render the app in the browser. It will helps to reflect the latest
changes in the update phase.

ReactDOM object method:
render(), hydrate(), findDOMNode(), createPortal(), unmountComponentAtNode()

It serves as the entry point to the DOM, we import it at the top of
our project. 

import ReactDOM from 'react-dom';
ReactDOM.render(element, container[, callback])
ReactDOM.render(<h1>ReactDOM</h1>, document.getElementById("app"))

first param is the element or component we want to render
second param is the HTML element to which we want to append it ('root' level div)
third param is optional callback is provided, It will be executed after 
the component is rendered or updated.

In React 18, React created new function createRoot and we will use it

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<App />);

Reference:
https://reactjs.org/docs/react-dom.html#render
https://blog.logrocket.com/managing-dom-components-reactdom/


*/

export {};
