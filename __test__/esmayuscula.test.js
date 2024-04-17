const isUpperCase =  require('../utils/esmayuscula');
test("comprobar mayuscula en palabra AMOR", () => {

    expect(isUpperCase("AMOR")).toBe(true);
})


test("comprobar mayuscula en palabra amor", () => {

    expect(isUpperCase("amor")).toBe(false);
})

