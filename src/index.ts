
import UserModel from "./models/UserModel";

const user = new UserModel("CJ", "Karkut");
console.log(user.getId());
console.log(user.greet());
console.log(user.getCreatedAt());
console.log("user: ", user);
