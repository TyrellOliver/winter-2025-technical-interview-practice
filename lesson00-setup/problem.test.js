const sayHello = require("./problem");
// This function should return hello world
describe("sayHello", () => {
  test("should return 'Hello, World!'", () => {
    expect(sayHello()).toBe("Hello, World!");
  });
});
