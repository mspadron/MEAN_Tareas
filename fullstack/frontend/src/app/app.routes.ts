import { Routes } from '@angular/router';
import { ShowComponent } from './pages/show/show.component';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';

export const routes: Routes = [
    { path: '', component: ShowComponent },
    { path: 'create', component: CreateComponent },
    { path: 'update/:id', component: EditComponent },
    { path: '**', redirectTo: 'show' }
];

