const UserService = require("../../service/userService");

const userService = new UserService();

describe("GET /users", () => {
  it("should return one user", async () => {
    const users = await userService.getAll();
    expect(users).toBeDefined();
    expect(users.length).toBe(1);
  });

  it("should user created", async () => {
    const data = {
      email: "test@gmail.com",
      password: "test",
    };
    const userId = await userService.postUser(data);
    const users = await userService.getAll();
    const user = await userService.getById(userId);
    expect(users).toEqual(
      expect.arrayContaining([expect.objectContaining(user)])
    );
    await userService.deleteUser(userId);
  });

  it("should user updated", async () => {
    const data = {
      email: "test@gmail.com",
      password: "test",
    };
    const userId = await userService.postUser(data);
    await userService.updateUser({ email: "test2@gmail.com" }, userId);
    const user = await userService.getById(userId);
    expect(user.email).toBe("test2@gmail.com");
    await userService.deleteUser(userId);
  });

  it("should not user created with empty value", async () => {
    const data = {
      email: "",
      password: "",
    };
    const userId = await userService.postUser(data);
    const user = await userService.getById(userId);
    expect(user).toEqual("User not found");
  });
});
