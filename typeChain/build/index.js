var hello = function () { return "hi"; };
var Block = /** @class */ (function () {
    function Block(data) {
        this.data = data;
    }
    Block.hello = function () {
        return "🖐";
    };
    return Block;
}());
