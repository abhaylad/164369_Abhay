describe("Calculator", function() {
    
        var cal; 
        var spot = { species: "Border Collie" };
        var cosmo = { species: "Border Collie" };
        beforeEach(function(){
        cal = new Calculator;
        });
        it("should perform addition",
        function() {
            expect(cal.add(3,5)).toEqual(8);
        });
        it("should perform subtraction",
        function() {
            expect(cal.sub(8,2)).toEqual(6);
        });
        it("should perform multiplication",
        function() {
            expect(cal.mult(3,5)).toEqual(15);
        });
        it("should perform division",
        function() {
            expect(cal.div(18,6)).toEqual(3);
        });
        it("check for toBe/toEqual",
        function() {
           expect(spot).toBe(cosmo);
        });
        
});