import shops from "./shops.json";
import users from "./users.json";
import user from "./user.json";

class Mocks {
  /**
   *  Api constructor
   */
  constructor() {
    this.isMocked = true;
  }
  mockedCall(path) {
    if (this.isMocked) {
      switch (path) {
        case "login":
          return { token: "validGameToken" };
        case "shops":
          return shops;
        case "users":
          return users;
        case "user":
          return user;
        default:
          return {};
      }
    }
    return {};
  }
}

export default new Mocks();
