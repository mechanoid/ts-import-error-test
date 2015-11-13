# Example for errorneous import behaviour

when using a class only in a switch/case branch it seems, that its import gets lost.

## setup

Clone this project and run `npm install` and compile the ts files via atom typescript plugin.

## run tests

run `npm test` to see the errorneous behaviour.

In case a class is only referenced in a branch(, as you can see in the Vehicle class), of a switch/case statement it seems, that its require statement is not pushed inside the file.

By referencing the class e.g. also in a console.log() statement as shown in the Car class, the import becomes visible.

```
Vehicle
  #constructor()
    ✓ should have a gasoline engine by default
    1) should have a diesel engine when set

Car
  #constructor()
[Function: DieselEngine]
    ✓ should have a gasoline engine by default
[Function: DieselEngine]
    ✓ should have a diesel engine when set


3 passing (13ms)
1 failing

1) Vehicle #constructor() should have a diesel engine when set:
   ReferenceError: DieselEngine_1 is not defined
    at new Vehicle (dist/Vehicle.js:7:35)
    at Context.<anonymous> (test/test.js:13:29)
```

When using the `tsc` command line utility all works as expected.
