class TestJsClass {
    constructor() {
        this.data_0 = arguments[0];
        this.data_1 = arguments[1];
    }

    // method
    getData0() {return this.data_0; }
    getData1() { return this.data_1; }
}

let TestJsSubClass = class{
    data_0 = "オーグメントは使えない";
    data_1 = "オーグメントは使えない";
}
let tjsc = new TestJsClass();
console.log(tjsc.data_0);

// instance create
let tjc = new TestJsClass('nakano', '99');
console.log(tjc.getData0() + " : " + tjc.getData0);