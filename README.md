# angular-2-debugger-pipe
Angular 2 pipe to trigger a JS debugger from a template!

# Usage:

```javascript
import { PLATFORM_PIPES } from '@angular/core';
import { DebuggerPipe } from 'angular-2-debugger-pipe';

bootstrap(App, [{
    provide: PLATFORM_PIPES,
    useValue: [DebuggerPipe],
    multi:true
}]);
```

Then, in your template:

```html
{{ someObject | debugger }}
```
