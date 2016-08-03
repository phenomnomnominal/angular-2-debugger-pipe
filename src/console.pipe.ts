'use strict';

// Angular:
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'debugger'
})
export class DebuggerPipe implements PipeTransform {
    transform(value: any): string {
        debugger;
        return '';
    }
}
