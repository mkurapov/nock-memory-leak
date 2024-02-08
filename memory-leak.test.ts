import nock from "nock";
import axios from "axios";

describe("Memory leak test", () => {
  test("example", async () => {
    const scope = nock("http://example.com").get("/").reply(200);
    await axios.get("http://example.com");
    scope.done();
  });

  afterAll(() => {
    nock.restore();
  });
});
