const stringLength = require('./stringLength');

test("test the length of the String", ()=>{

    expect(stringLength("asdf")).toBe(4);
})

test("Microverse",()=>{
    expect (stringLength("Microverse")).toBe(10);
})