let EventEmitter = require('events');
let util = require('util');

function Dialog() {
    this.message = 'Hello';
}

util.inherits(Dialog, EventEmitter);

Dialog.prototype.sayHello = function() {
    console.log(this.message);
    this.emit('hello');
};


let dialog = new Dialog();
dialog.on('hello', function() {
    console.log('Notify hello');
});

dialog.sayHello('This name');
