const request = require("supertest");
const app = require("..");
const { clearDatabase } = require("../db.connection");

describe("todo routes", () => {
  let testAgent = request(app);
  afterEach(async () => {
    await clearDatabase();
  });
  it("(GET /todo ) should respond with todos=[]", async () => {
    let res= await testAgent.get("/todo")
    expect(res.status).toBe(200);
    expect(res.body.data).toHaveSize(0);
  });
  it("(POST /todo) without auth: should respond with please login first",async()=>{
    let res= await testAgent.post("/todo").send({title:"eat breakfast"})
    expect(res.status).toBe(401);
    expect(res.body.message).toContain("please login first")
  })
  it("(POST /todo) should respond with new todo",async()=>{
    let newUser = { name: "Hoda", email: "test@test.com", password: "1234567" };
    await testAgent.post("/user/signup").send(newUser);

    let res1 = await testAgent.post("/user/login").send(newUser);
    let token= res1.body.data

    let res= await testAgent.post("/todo").send({title:"eat breakfast"}).set({authorization:token})
    expect(res.status).toBe(201);
    expect(res.body.data.title).toBe("eat breakfast")
  })
// ------------------------------------------lab-------------------------------------------------------------
    it("(PATCH /todo) without title with id only should respond with res status 400 and a message", async () => {
      let newUser = { name: "Mariam", email: "mariam@test.com", password: "1234567" };
      await testAgent.post("/user/signup").send(newUser);

      let loginRes = await testAgent.post("/user/login").send(newUser);
      let token = loginRes.body.data;

      let createRes = await testAgent.post("/todo").send({ title: "eat breakfast" }).set({ authorization: token });
      let todoId = createRes.body.data._id;
      let res = await testAgent.patch(`/todo/${todoId}`).set({ authorization: token }).send({});
      expect(res.status).toBe(400);
      expect(res.body.message).toContain("title");
    });

    it("(PATCH /todo) with id and title should respond with status 200 and the new todo", async () => {
      let newUser = { name: "Mariam", email: "mariam@test.com", password: "1234567" };
      await testAgent.post("/user/signup").send(newUser);

      let loginRes = await testAgent.post("/user/login").send(newUser);
      let token = loginRes.body.data;

      let createRes = await testAgent.post("/todo").send({ title: "eat" }).set({ authorization: token });
      let todoId = createRes.body.data._id;
      let res = await testAgent.patch(`/todo/${todoId}`).send({ title: "Eat Breakfast" }).set({ authorization: token });
      expect(res.status).toBe(200);
      expect(res.body.data.title).toBe("Eat Breakfast");
    });

    it("(GET /todo/user) should respond with the user's all todos", async () => {
      let newUser = { name: "Mariam", email: "mariam@test.com", password: "1234567" };
      await testAgent.post("/user/signup").send(newUser);

      let loginRes = await testAgent.post("/user/login").send(newUser);
      let token = loginRes.body.data;

      await testAgent.post("/todo").send({ title: "Todo 1" }).set({ authorization: token });
      await testAgent.post("/todo").send({ title: "Todo 2" }).set({ authorization: token });

      let res = await testAgent.get("/todo/user").set({ authorization: token });
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveSize(2);
    });

    it("(GET /todo/user) for a user hasn't any todo, should respond with status 200 and a message", async () => {
      let newUser = { name: "Mariam", email: "mariam@test.com", password: "1234567" };
      await testAgent.post("/user/signup").send(newUser);

      let loginRes = await testAgent.post("/user/login").send(newUser);
      let token = loginRes.body.data;

      let res = await testAgent.get("/todo/user").set({ authorization: token });
      expect(res.status).toBe(200);
      expect(res.body.message).toContain("Couldn't find any todos");
    });
    
  });