import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DailySituationComponent } from './daily-situation/daily-situation.component';
import { OverallSituationComponent } from './overall-situation/overall-situation.component';
import { HistoryComponent } from './history/history.component';
import { AdminComponent } from './admin/admin.component';
import { DailyListComponent } from './daily-list/daily-list.component';
import { EntrySelectorComponent } from './entry-selector/entry-selector.component';
import { GraphLauncherComponent } from './graph-launcher/graph-launcher.component';
import { GraphDisplayComponent } from './graph-display/graph-display.component';
import { PositionComponent } from './position/position.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { OverallListComponent } from './overall-list/overall-list.component';
import { HistoryListComponent } from './history-list/history-list.component';
import { GraphModalComponent } from './graph-modal/graph-modal.component';
import { LoaderService } from './services/loader.service';
import { InterceptorService } from './services/interceptor.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { DateProvider } from './services/date-provider';
import { RepositoryService } from './services/repository-service';
import { DailySituationService } from './services/daily-situation-service';
import { EntrySelectorService } from './services/entry-selector-service';
import { EnvironmentUrlService } from './services/environment-url-service.service';
import { GraphDataProviderService } from './services/graph-data-provider.service';
import { OverallSituationService } from './services/overall-situation-service';
import { SelectionMadeService } from './services/selection-made.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DailySituationComponent,
    OverallSituationComponent,
    HistoryComponent,
    AdminComponent,
    DailyListComponent,
    EntrySelectorComponent,
    GraphLauncherComponent,
    GraphDisplayComponent,
    PositionComponent,
    OverallListComponent,
    HistoryListComponent,
    GraphModalComponent,
    SpinnerComponent
  ],
  entryComponents:[
    GraphModalComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    ChartsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'daily', component:DailySituationComponent},
      {path:'overall', component:OverallSituationComponent},
      {path:'history/:year',component:HistoryComponent},
      {path: 'admin', component:AdminComponent},
      {path: 'graph', component:GraphDisplayComponent},
      {path: '', redirectTo:'/daily', pathMatch: 'full'}
    ]),
    AngularFontAwesomeModule
  ],
  exports:[
    RouterModule
  ],
  providers: [
    DateProvider,
    RepositoryService,
    DailySituationService,
    EntrySelectorService,
    EnvironmentUrlService,
    GraphDataProviderService,
    InterceptorService,
    OverallSituationService,
    SelectionMadeService,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
