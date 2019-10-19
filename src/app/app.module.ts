import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FeedComponent } from './components/feed/feed.component';
import { FeedbackComponent } from './components/feed/feedback/feedback.component';
import { PostComponent } from './components/common/post/post.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FeedComponent,
    FeedbackComponent,
    PostComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
