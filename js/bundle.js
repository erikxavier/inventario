!function(g){function n(I){if(e[I])return e[I].exports;var t=e[I]={i:I,l:!1,exports:{}};return g[I].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var e={};return n.m=g,n.c=e,n.i=function(g){return g},n.d=function(g,e,I){n.o(g,e)||Object.defineProperty(g,e,{configurable:!1,enumerable:!0,get:I})},n.n=function(g){var e=g&&g.__esModule?function(){return g.default}:function(){return g};return n.d(e,"a",e),e},n.o=function(g,n){return Object.prototype.hasOwnProperty.call(g,n)},n.p="",n(n.s=2)}([/*!*****************************!*\
  !*** ../~/angular/index.js ***!
  \*****************************/
function(module,exports,__webpack_require__){eval("__webpack_require__(/*! ./angular */ 1);\nmodule.exports = angular;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9+L2FuZ3VsYXIvaW5kZXguanM/MDhmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCcuL2FuZ3VsYXInKTtcbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vYW5ndWxhci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9")},/*!*******************************!*\
  !*** ../~/angular/angular.js ***!
  \*******************************/
},/*!****************!*\
  !*** ./app.js ***!
  \****************/
function(module,exports,__webpack_require__){eval("const angular = __webpack_require__(/*! angular */ 0);\r\n\r\n\r\nangular.module('app', [])\r\n    .controller('InventarioController', InventarioController)\r\n\r\nInventarioController.$inject = ['$scope']\r\nfunction InventarioController($scope) {\r\n    let vm = this\r\n    vm.teste = \"oi, eu sou o testinho\"\r\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC5qcz9kOGVlIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFuZ3VsYXIgPSByZXF1aXJlKCdhbmd1bGFyJyk7XHJcblxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtdKVxyXG4gICAgLmNvbnRyb2xsZXIoJ0ludmVudGFyaW9Db250cm9sbGVyJywgSW52ZW50YXJpb0NvbnRyb2xsZXIpXHJcblxyXG5JbnZlbnRhcmlvQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnXVxyXG5mdW5jdGlvbiBJbnZlbnRhcmlvQ29udHJvbGxlcigkc2NvcGUpIHtcclxuICAgIGxldCB2bSA9IHRoaXNcclxuICAgIHZtLnRlc3RlID0gXCJvaSwgZXUgc291IG8gdGVzdGluaG9cIlxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9")}]);