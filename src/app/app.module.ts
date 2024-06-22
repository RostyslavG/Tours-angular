import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { ApiService } from './api.servise';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ToursComponent } from './tours/tours.component';
import { AboutComponent } from './about/about.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { BlogComponent } from './blog/blog.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';

const appRoutes: Routes = [
  { path: '', component: ThankYouPageComponent },
  { path: 'main', component: MainComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'tours', component: ToursComponent },
  { path: 'tours/:id', component: TourDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/main' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ToursComponent,
    AboutComponent,
    TourDetailsComponent,
    MainComponent,
    BlogComponent,
    ThankYouPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
