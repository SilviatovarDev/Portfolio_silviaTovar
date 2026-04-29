import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from '../../pipes/safe-pipe'; 
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, SafePipe],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css'
})
export class ProyectosComponent implements AfterViewInit { // Añadimos el implements

  listaProyectos = [
       { id: '00', nombre: 'Portfolio 26', categoria: 'UX/UI ', url: '', tags: ['Angular', 'TypeScript', 'Tailwind CSS', 'GSAP'] },
    { id: '01', nombre: 'Landing Page', categoria: 'Design and Development', url: 'https://portfolio-silvia-tovar-bi6y.vercel.app', tags: ['HTML', 'SASS', 'JAVASCRIPT'] },
    {
      id: '02', nombre: 'Portolio 25', categoria: 'UX/UI ', url: 'https://portfolio-silvia-tovar.vercel.app', tags: ['JavaScript', 'Bootstrap','HTML', 'CSS']
    },
    { id: '03', nombre: 'Comunitea', categoria: 'UX/UI - TFG DAW ', url: 'https://comunitea.infinityfreeapp.com', tags: ['JavaScript', 'Bootstrap', 'PHP', 'SQL', 'Figma'] },
    { id: '04', nombre: 'H&M Redesign', categoria: 'Design UX', url: 'https://embed.figma.com/proto/551ryc9Tcnq5rFFXTxJPKo/H-M-Redesing?node-id=9-277&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=9%3A277&embed-host=share', tags: ['Figma'] }
  ];

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
gsap.from('#proyectos', {
    scrollTrigger: {
      trigger: '#proyectos',
      start: 'top bottom', 
      end: 'top center',
      scrub: 1,          
    },
    y: 200,               
    opacity: 0.8,
    ease: 'none'
  });

  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#proyectos',
      start: 'top 60%',    
      toggleActions: "play none none reverse" 
    }
  });

  tl.from('.titulo-seccion', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  })
  .from('.proyecto-row', {
    y: 100,
    opacity: 0,
    stagger: 0.2,         
    duration: 1.2,
    ease: 'power4.out'
  }, "-=0.4");           

  }
}