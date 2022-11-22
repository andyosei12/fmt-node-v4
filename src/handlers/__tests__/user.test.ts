import * as user from "../user";
describe("user", () => {
  it("should create a new user", async () => {
    const req = { body: { username: "hello", password: "there" } };
    const res = {
      json({ token }) {
        expect(token).toBeTruthy();
      },
    };
    await user.createNewUser(req, res, () => {});
  });
});
