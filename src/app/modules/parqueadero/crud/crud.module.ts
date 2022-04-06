import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudPageRoutingModule } from './crud-routing.module';

import { CrudPage } from './crud.page';
import { MenuComponent } from '../menu/menu.component';

import { UserPageRoutingModule } from './user-routing.module';

import { UserPage } from './user.page';
import { MenuComponent } from './menu/menu.component';
import { CrudPageRoutingModule } from './crud-routing.module';

import { CrudPage } from './crud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudPageRoutingModule
  ],
  declarations: [CrudPage,MenuComponent]
})
export class CrudPageModule ({
    [UserPageRoutingModule],
  declarations: [UserPage,MenuComponent]
})
export class UserPageModule {
[
    CrudPageRoutingModule
  ],
  declarations: [CrudPage]
})
export class CrudPageModule {}
