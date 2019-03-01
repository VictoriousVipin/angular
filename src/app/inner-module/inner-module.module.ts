import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
    {
      path: '',
      component: NewComponent,
    }])
  ],
  declarations: [NewComponent]
})
export class InnerModuleModule { }
