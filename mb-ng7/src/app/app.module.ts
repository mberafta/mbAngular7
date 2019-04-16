// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppBootstrapModule } from './app-bootstrap.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

// Components
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/header/main-header/main-header.component';
import { ItemListComponent, ItemEditComponent, ItemSearchComponent } from './components/item/item.index';
import { MainNavigationComponent } from './components/navigation/main-navigation/main-navigation.component';
import { CounterComponent } from './components/counter/counter.component';
import { FooterComponent } from './components/footer/footer.component';
import { TabItemComponent, TabContainerComponent } from './components/tab/tab.index';
import { CommentComponent } from './components/comment/comment.component';

// Services
import { ItemService, ReactiveItemService } from './services/services.index';
import { ItemFactory } from './factories/item.factory';

// Directives
import { PopupDirective } from './directives/popup.directive';
import { MbMessageDirective } from './directives/mbMessage.directive';

// Constants
import { AppConstants } from './app.constants';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainNavigationComponent,
    ItemListComponent,
    ItemEditComponent,
    CounterComponent,
    FooterComponent,
    ItemSearchComponent,
    TabContainerComponent,
    TabItemComponent,
    CommentComponent,
    PopupDirective,
    MbMessageDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppBootstrapModule,
    SocketIoModule.forRoot({
      url:"http://localhost:3000", options:{}
    })
  ],
  providers: [
    { provide: AppConstants.API_ITEMS_URL, useValue: '/api/items' },
    { provide: AppConstants.API_SEARCH_URL, useValue: '/api/search' },
    {
      provide: ItemService,
      deps: [HttpClient, AppConstants.API_ITEMS_URL, AppConstants.API_SEARCH_URL],
      useFactory(http: HttpClient, apiItemsUrl: string, apiSearchUrl: string) {
        const itemFactoryImplementation: ItemFactory = {
          test(): void {
            console.log('ItemFactory used by ItemService');
          }
        };

        return new ItemService(http, apiItemsUrl, apiSearchUrl, itemFactoryImplementation);
      }
    },
    ReactiveItemService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
