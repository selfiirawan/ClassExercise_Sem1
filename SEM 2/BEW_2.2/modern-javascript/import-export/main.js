import { sayHello } from "./greetings.js";
import { add, subtract } from "./mathOperations.js";
import onlyOneFunction from "./defaultExporter.js"

sayHello()
console.log(add(4, 8))
console.log(subtract(10, 6))
onlyOneFunction()