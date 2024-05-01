import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { PathLocationStrategy, LocationStrategy, CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';



import { NotfoundComponent } from './pages/components/notfound/notfound.component';
import { EventService } from './pages/service/event.service';
import { IconService } from './pages/service/icon.service';
import { MenubarService } from 'primeng/menubar';
import { BusinessPermitModule } from './pages/components/business-permit/business-permit.module';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [
        AppRoutingModule,
        AppLayoutModule,


    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
       
        EventService,
        IconService,
        MenubarService,
        DialogService,
        ConfirmationService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
