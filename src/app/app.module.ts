import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OnChangesModule} from './wallet-hub-tasks/on-changes/on-changes.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import { SliceDesignTestModule} from './wallet-hub-tasks/slice-design-test/slice-design-test.module';
import { ToolbarNavComponent } from './wallet-hub-tasks/_components/toolbar-nav/toolbar-nav.component';
import { MainNavComponent } from './wallet-hub-tasks/_components/main-nav/main-nav.component';
import { ViewOutletComponent } from './wallet-hub-tasks/_components/view-outlet/view-outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarNavComponent,
    MainNavComponent,
    ViewOutletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnChangesModule,
    BrowserAnimationsModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    SliceDesignTestModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
