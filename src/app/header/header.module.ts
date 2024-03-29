import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { share } from 'rxjs';
import { SearchBarComponent } from '../search/search-bar/search-bar.component';
import { SearchModule } from '../search/search.module';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    SearchModule
  ],exports:[HeaderComponent]
})
export class HeaderModule { }
