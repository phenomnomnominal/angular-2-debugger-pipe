'use strict';

var core = require('@angular/core');

var DebuggerPipe = (function () {
    function DebuggerPipe() {}

    DebuggerPipe.prototype.transform = function (value) {
        debugger;
        return '';
    };

    DebuggerPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'debugger', pure: true },] },
    ];
    return DebuggerPipe;
}());

exports.DebuggerPipe = DebuggerPipe;
