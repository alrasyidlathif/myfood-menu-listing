import request from "supertest";
import { api } from "../app";
import { config } from "../config/env.config";
import { initFunc } from "../custom/logger/error-logger";

if (initFunc() == 0) {
    process.exit(1);
}

var TAG: string = config.api.tag as string;

describe("Test api", () => {
    it("should respond with a 404", () => {
        return request(api)
        .get(`/api/${TAG}/itemsx`)
        .expect(404)
    })
    it("should respond with a 400", () => {
        return request(api)
        .get(`/api/${TAG}/items/9xx`)
        .expect(400)
    })
    it("should respond with a 404", () => {
        return request(api)
        .get(`/api/${TAG}/items/99999`)
        .expect(404)
    })
    it("should respond with a 200", () => {
        return request(api)
        .get(`/api/${TAG}/items`)
        .expect(200)
    })
    it("should respond with a 200", () => {
        return request(api)
        .get(`/api/${TAG}/items/1`)
        .expect(200)
    })
})
