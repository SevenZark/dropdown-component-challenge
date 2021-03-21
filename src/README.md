Departures from what you see in typical React example/tutorial code:

* Why I don't use React.FC type
  - It forces children on components whether you need that or not
  - It is less maintainable (e.g., it has already been changed once from SFC(?) to FC)

* I use one instance of state per component [state reasons]
  - Always, even if I only need one state value - for consistency
  - And always setState with ...state first, for consistency/maintainability

* I avoid use of anonymous functions as props [state reasons, include link?]