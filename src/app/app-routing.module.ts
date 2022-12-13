import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './pages/DetailPage/DetailPage.component';
import { HomePageComponent } from './pages/HomePage/HomePage.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'detail', component: DetailPageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
