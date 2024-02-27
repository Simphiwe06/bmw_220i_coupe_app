import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Bwm220iCoupeComponent } from './app/bwm220i-coupe/bwm220i-coupe.component'; // Import your component
import { environment } from './environments/environment';


// Enable production mode
if (environment.production) {
  enableProdMode();
}

// Manually bootstrap the Bwm220iCoupeComponent
platformBrowserDynamic().bootstrapModule(Bwm220iCoupeComponent)
  .catch(err => console.error(err));
