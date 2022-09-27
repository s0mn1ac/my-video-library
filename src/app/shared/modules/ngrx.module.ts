/* Angular */
import { NgModule } from '@angular/core';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_EFFECTS, ROOT_REDUCERS } from 'src/app/state/app.state';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name: 'my-video-library' }),
    EffectsModule.forRoot(ROOT_EFFECTS)
  ]
})
export class NgRxModule { }
