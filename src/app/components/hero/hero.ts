import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent implements AfterViewInit {
  
  @ViewChild('titulo') titulo!: ElementRef;
  @ViewChild('subtitulo') subtitulo!: ElementRef;
  @ViewChild('fondoMarron') fondoMarron!: ElementRef;

  secciones = [
    { id: '01', nombre: 'PROJECTS', link: '#proyectos' },
    { id: '02', nombre: 'About Me', link: '#sobre-mi' },
    { id: '03', nombre: 'Contact', link: '#contacto' }
  ];

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#hero-section',
        start: 'top 90%',
        toggleActions: "restart pause resume reverse" 
      }
    });

    tl.from(this.fondoMarron.nativeElement, {
      scale: 1.5,
      y: 1000,
      rotate: -10,
      duration: 2,
      ease: 'expo.out'
    })
    .from(this.titulo.nativeElement, {
      y: 150,
      opacity: 0,
      duration: 1.5,
      ease: 'power4.out'
    }, "-=1.5") 
    .fromTo('nav a', 
      { x: -50, opacity: 0 }, 
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.15, 
        ease: 'power4.out' 
      }, 
    "-=1")
    .from(this.subtitulo.nativeElement, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power3.out'
    }, "-=0.5");

    gsap.to(this.fondoMarron.nativeElement, {
      clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)', 
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero-section',
        start: 'top top',    
        end: 'bottom top',   
        scrub: true         
      }
    });
  }
}