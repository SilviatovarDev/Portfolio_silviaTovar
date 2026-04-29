import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero';
import { ProyectosComponent } from './components/proyectos/proyectos';
import { AboutComponent } from './components/about/about';
import { ContactoComponent } from './components/contacto/contacto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent, ProyectosComponent , AboutComponent, ContactoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-portfolio');
}
