import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent
    //Add new components here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //Add all imports here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
