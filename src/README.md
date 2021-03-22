# My Solution: Some Notes

## Accessibility
* Elements have aria-* and role attributes to clue in accessibility
* You can tab to the select controls and open them with the spacebar
* Once they are open, you can tab through the options and select one with spacebar

## Departures from what you see in typical React example/tutorial code

* I don't use React.FC type, but instead use plain functions and type the properties.
  - Because function types force variable-style function declaration, and are thus less flexible
  - Because React.FC forces children on components whether you need that or not. I think it's better to overtly declare children in a props type when a component uses children.
  - Because component types are less maintainable (e.g., it has already been changed once from SFC to FC)
* I use one instance of state per component 
  - Because each product of useState shows as anonymous (no name) in React's dev tools, so it's hard to distinguish which value I'm looking at
  - I always do this, even if I only need one state value, for consistency and extensibility. If something else needs to be added to state, I can just add a new key without having to refactor much.
  - And always do setState with ...state first, for  similar reasons: consistency and easy maintenance if more keys are added.
* I avoid use of anonymous functions as props, but instead always declare the function above the component I will pass it to.
  - Because each appearance of an anon function will create a brand new function copy, and if you're mapping over an array, this can become a performance problem. Named functions or variable functions, on the other hand, will only create one copy and pass it by reference to the props.
  - I always do it this way even if not mapping over an array, for consistency and maintainability. This way I don't need to add decision points about when to use anon functions as props or not; I just do it the same way, making the code easier to maintain and extend. 

## What I didn't do

I wanted to make the dropdowns close automatically when you click away from them, but that solution would add some complexity that felt like it was outside the point of this exercise, and would also take a bit more time to pull off. 

However, had I pursued this, there are two possible solutions:
* Make the body element 100vh, and detect clicks on it. Then use the Context API to message that the body has been clicked. The Select components would watch for this and close themselves. Select's working links would need to stop propogation so their click events did not bubble up to the body.
* Or, interpose a clear "lightbox" type of element, absolutely positioned and the height and width of the entire document, then cause the dropdown list to appear on top of it when opened. The lightbox element would detect clicks and close itself and the select list when clicked.