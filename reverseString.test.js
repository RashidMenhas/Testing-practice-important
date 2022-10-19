const reversString = require ('./reverseString');

test("reverse String ", ()=>{
    expect(reversString).toBeDefined();
})

test('check the reverse string ', () =>{
    expect(reversString("hello")).toEqual("olleh");
})