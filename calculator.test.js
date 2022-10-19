const calculator = require('./calculator');

const testCheck = ()=> console.log("checking test");

describe("check test",()=>{
    beforeEach(()=> testCheck ());

    test ("check the sum of two number", ()=>{
        expect (calculator.add(3,3)).toBe(6);
    });
    test ("check the sum of two number", ()=>{
        expect (calculator.add(2,3)).toBe(5);
    });
    test ("check the sum of two number", ()=>{
        expect (calculator.add(6,3)).toBe(9);
    });
    
    test('check the subtraction of two number', ()=>{
        expect(calculator.subtract(5,3)).toBe(2);
    });
    test('check the subtraction of two number', ()=>{
        expect(calculator.subtract(3,3)).toBe(0);
    });
    test('check the subtraction of two number', ()=>{
        expect(calculator.subtract(5,2)).toBe(3);
    });
    
    test('check the multiply of two number', ()=>{
        expect(calculator.multiply(5,2)).toBe(10);
    });
    test('check the multiply of two number', ()=>{
        expect(calculator.multiply(5,5)).toBe(25);
    });
    test('check the multiply of two number', ()=>{
        expect(calculator.multiply(5,4)).toBe(20);
    });
    
    test('check the subtraction of two number', ()=>{
        expect(calculator.divid(6,3)).toBe(2);
    });
    test('check the subtraction of two number', ()=>{
        expect(calculator.divid(25,5)).toBe(5);
    });
    test('check the subtraction of two number', ()=>{
        expect(calculator.divid(16,4)).toBe(4);
    });

});


