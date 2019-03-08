1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    Array.filter(), Array.map(), and Object.assign()
    Object.assign() - is the one we use to create a new object while extending 
    the properties of another object

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

        Store - is known as a 'single source of truth' because every change that is occuring goes through the store. it contains the state of our application. Also it lets us make the state immutable, by letting us clone the state, modify the copied state, creating a new state, without mutating our old state.

        Actions - are what hold our action types and payloads. Tho payload is Optional and is not required in some of the cases, depending on your written code. As well actions are passed in Reducers, telling them how to behave/update the state.

        Reducers - are synchronous, meaning the code will run in the order it was written, and it won't render skipped data. We update our state using reducers. As well, Actions are handled by reducers and replace the store accordingly.



1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

        Application state global, meaning we use 'store' to hold the state,and that will give any component an ability to access the store using hooks/connect 

        component state can only be updated in that same components and it is being passed down only as props to it's children 

1.  What is middleware?

        middleware is to intercept some process, run a function at the intercept point, then continue the process. Or, sometimes middleware stops the process entirely. With middleware, when we “intercept” the process, we are usually trying to do something with the data that is flowing with the process. For example:

                stop actions.
                forward an action untouched.
                dispatch a different action.
                dispatch multiple actions.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

        Redux-thunk is a middleware that allows Redux to handle asynchronous operations.
        Redux-thunk allows action creators to perform async API calls. 

1.  Which `react-redux` method links up our `components` with our `redux store`?

        CONNECT. It can take 'mapStateToProps' & actions as arguments when exporting a component
