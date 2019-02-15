function Calculator(n1,n2) {
    this.n1=n1;
    this.n2=n2;
    this.add = function(n1,n2){
    return n1+n2;
    };
    this.sub = function(n1,n2){
    return n1-n2;
    };
    this.mult = function(n1,n2){
    return n1*n2;
    };
    this.div = function(n1,n2){
    return n1/n2;
    };
}