import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { ListComponent } from './pages/list/list.component';
import { HeroComponent } from './pages/hero/hero.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    EditComponent,
    HeroComponent,
    DetailComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule, ReactiveFormsModule],
})
export class HomeModule {}
