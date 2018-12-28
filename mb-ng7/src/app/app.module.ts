// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppBootstrapModule } from './app-bootstrap.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/header/main-header/main-header.component';
import { ItemListComponent, ItemDetailsComponent, ItemEditComponent } from './components/item/item.index';
import { MainNavigationComponent } from './components/navigation/main-navigation/main-navigation.component';
import { CounterComponent } from './components/counter/counter.component';
import { FooterComponent } from './components/footer/footer.component';

// Services
import { ItemService, ReactiveItemService } from './services/services.index';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainNavigationComponent,
    ItemListComponent,
    ItemDetailsComponent,
    ItemEditComponent,
    CounterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppBootstrapModule
  ],
  providers: [
    ItemService,
    ReactiveItemService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
