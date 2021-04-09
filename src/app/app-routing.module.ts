import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'login/:displayName', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'chatBox', component: ChatBoxComponent },
  { path: '',   redirectTo: '/register', pathMatch: 'full' }, // redirect to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
