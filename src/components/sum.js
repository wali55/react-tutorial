test("check sum of 2 numbers", () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(-2, 3)).toBe(1);
    expect(sum()).toBe("please check the arguments");
})

export const sum = (a, b) => {
    return a + b;
}