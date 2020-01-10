let EventEmitter = require('events');
let util = require('util');

function Dialog() {
    this.message = 'Hello';
}

util.inherits(Dialog, EventEmitter);

Dialog.prototype.sayHello = function(data) {
    console.log(this.message + ' ' + data);
    this.emit('hello', data);
};


let dialog = new Dialog();
dialog.on('hello', function(data) {
    console.log('Notify hello' + ' ' + data);
});

dialog.sayHello('This name');
