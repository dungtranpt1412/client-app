import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StaffComponent } from './staff/staff.component';


const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: 'Home',
        component: HomeComponent
      },
      {
        path: 'About',
        component: AboutComponent
      },
      {
        path: 'Staff',
        component: StaffComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
