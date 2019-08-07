# NgxWordpress

This library is a showcase for Ionic + Angular shared libraries.

## Installation

````bash
npm install npx-wordpress
````

## Bootstrap

Import the library into your root module and insert your Wordpress URL:

```javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgxWordpressModule } from 'ngx-wordpress';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    NgxWordpressModule.forRoot({
    apiUrl: 'https://YOURBLOGURL.com/wp-json/wp/v2'
  })],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## Usage

This library provides a service and a component. To use them with Ionic, make sure to load the module in the module file of your page:

```javascript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { NgxWordpressModule } from 'ngx-wordpress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    NgxWordpressModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
```

### API

```javascript
constructor(private wpService: NgxWordpressService) {
  this.wpService.getPostList({'_embed': true}).subscribe(res => {
    this.posts = res;
  });
}
```

### Component

```html
<wp-post-card [post]="post" (details)="openDetails($event)"></wp-post-card>
```
