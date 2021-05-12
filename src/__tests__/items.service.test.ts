import { remove } from "../items/items.service";

describe("Test items service remove", () => {
    it("should respond with a null", () => {
        return remove(999).then(res => {
            expect(res).toBe(null)
        })
    })
    it("should respond with a void", () => {
        return remove(1).then(res => {
            expect(res).toBeUndefined()
        })
    })
})
