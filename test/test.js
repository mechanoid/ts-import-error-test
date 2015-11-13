var assert = require('assert');
var Vehicle = require('../dist/Vehicle.js').Vehicle;
var Car = require('../dist/Car.js').Car;

describe('Vehicle', function() {
  describe('#constructor()', function () {
    it('should have a gasoline engine by default', function () {
      var gasUsingVehicle = new Vehicle();
      assert.equal(gasUsingVehicle.engine.type, "gasoline");
    });

    it('should have a diesel engine when set', function () {
      var gasUsingVehicle = new Vehicle("diesel");
      assert.equal(gasUsingVehicle.engine.type, "diesel");
    });
  });
});

describe('Car', function() {
  describe('#constructor()', function () {
    it('should have a gasoline engine by default', function () {
      var gasUsingVehicle = new Car();
      assert.equal(gasUsingVehicle.engine.type, "gasoline");
    });

    it('should have a diesel engine when set', function () {
      var gasUsingVehicle = new Car("diesel");
      assert.equal(gasUsingVehicle.engine.type, "diesel");
    });
  });
});
