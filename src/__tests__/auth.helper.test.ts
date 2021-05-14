import { createToken, verifyToken } from "../auth/auth.helper"

describe("Test auth helper create token", () => {
    it("should respond with a success", () => {
        return expect(typeof createToken("")).toEqual("string")
    })
    it("should respond with a success", () => {
        return expect(typeof createToken("abcd")).toEqual("string")
    })
})

describe("Test auth helper verify token", () => {
    it("should respond with a error", () => {
        return expect(() => {
            verifyToken("")
        }).toThrowError("jwt must be provided")
    })
    it("should respond with a error -> 1", () => {
        const token: string = createToken("")
        return expect(verifyToken(token)).toEqual(1)
    })
    it("should respond with a error -> 1", () => {
        const token: string = createToken("abcd")
        return expect(verifyToken(token)).toEqual(1)
    })
})
