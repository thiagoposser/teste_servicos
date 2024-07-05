import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Importando HttpClientModule

import { AppComponent } from './app.component';
import { TesteServicosComponent } from './teste-servicos/teste-servicos.component';
import { TesteServicosService } from './teste-servicos/teste-servicos.service';

@NgModule({
  declarations: [
    AppComponent,
    TesteServicosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Adicionando HttpClientModule nos imports
  ],
  providers: [TesteServicosService], // Adicionando o serviço nos providers
  bootstrap: [AppComponent]
})
export class AppModule { }
