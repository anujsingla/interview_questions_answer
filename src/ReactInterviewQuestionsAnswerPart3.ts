/*
https://github.com/sudheerj/reactjs-interview-questions/blob/master/README.md#what-is-react

React Interview Questions and answers

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
