# context-example
Example of using react context without redux. Using React context instead of redux is applicable for very large and complex web apps.

### Installation
```sh
$ npm install
$ npm start
```

### Description
Compared to redux
- there is less indirection/more straightforward code when reading/writing to global state
- there is likely to be more consistency with global property names used throughout your codebase
- don't have to worry about keeping global state serializable (which is encouraged when using redux) - the public api from consumers is more important - you are able to write clear code this way
- can use the same react context/providers patterns at global/page/shared component levels
- use `useState` for managing context state, the same as you would anywhere in local components - can optionally use `useReducer` if you believed in some situation that made the code more readable
- keeps most code simple by default, then in the smaller percentage of places where you need the performance you write an optimization with more complicated code

Some things you are losing
- you are not able to 'select' an individual property contained in a context, thus more React renders will be made than might be than with redux.
  - after creating a complex application with similar patterns to the ones shown here, there have been very few cases where this is an actual problem.
    when it is a problem, a performance optimization has been written to get around this, and keep the rest of the code clean
- there is no 'ledger' of actions being made
  - if I wanted undo/redo functionality for a specific component then I would implement a ledger for that component manually
- you are not getting time travel debugging etc.
  - in my experience console.log/debugger is fine for debugging context state, just as it is for local state? generally very quick to see what is happening and fix problems as one-way data flow is always there
  - time travel debugging has less value the more that state is kept out of redux, when even most die-hard redux fans will agree is not a good thing to keep all state in redux
- you are not getting use of additional redux middleware
  - no need for thunk etc.
  - sagas have been horribly abused by many projects and have led to unmaintainable code - I could write pages about this specifically...

In my opinion the positives far outweight the negatives here - I think the biggest argument of merit is not being able to individually select a property in a given context? Possibly theres some application out there where you are able to write code more cleanly with redux because there are just so many global updates happening? Would love to see an example of this, but I'm sure if it exists its for an extremely small percentage of webapps out there.

The general approach is similar to forcing something like:

`connect((state) => ({ user: state.user }))`

when accessing reducers (always returning the reducer rather than individual pieces of the reducer), and simplifying action creation. When building a large app I want a slightly higher level of abstraction to retrieve global objects than what connect/useSelector gives to keep consistency throughout the application.

and finally:
- heres the best rule for where to place state: keep the state local until it needs to be shared and moved up to a higher level

### Commands
- `npm start`
  - starts the web dev server at http://localhost:8080
- `npm run lint`
  - runs js and css linting over the project

- folder structure
  - `/src/components` contains global shared components
  - `/src/hooks` contains global react hooks
  - `/src/providers` contains global providers made from react contexts
  - `/src/views` contains components for specific pages
