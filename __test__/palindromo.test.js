const palindromo =  require('../utils/palindromo');
test("comprobar palindromo amor", () => {

    expect(palindromo("amor")).toBe("roma");
})

test("comprobar palindromo caracola", () => {

    expect(palindromo("caracola")).toBe("alocarac");
})