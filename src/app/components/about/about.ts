import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);


    gsap.to('.background-image', {
      yPercent: 20, 
      ease: "none",
      scrollTrigger: {
        trigger: '#sobre-mi',
        start: "top bottom", 
        end: "bottom top",
        scrub: true 
      }
    });

    gsap.from('.about-texto-izq', {
      scrollTrigger: {
        trigger: '#sobre-mi',
        start: 'top 80%',
        toggleActions: "restart none none reverse" 
      },
      x: -50,
      opacity: 0,
      duration: 1.5,
      ease: 'power4.out'
    });

    gsap.from('.about-texto-der p', {
      scrollTrigger: {
        trigger: '#sobre-mi',
        start: 'top 75%',
        toggleActions: "restart none none reverse" 
      },
      y: 30,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power3.out'
    });

    gsap.from('.about-imagen', {
      scrollTrigger: {
        trigger: '#sobre-mi',
        start: 'top 70%',
        toggleActions: "restart none none reverse", 
        onEnter: () => this.iniciarLevitacion() 
      },
      scale: 0.8,
      opacity: 0,
      duration: 1.8,
      ease: 'elastic.out(1, 0.75)'
    });

    gsap.from('.skill-column', {
      scrollTrigger: {
        trigger: '.skill-column',
        start: 'top 90%',
        toggleActions: "restart none none reverse" 
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15, 
      ease: 'power2.out'
    });
  }

  iniciarLevitacion(): void {
    gsap.killTweensOf('.about-imagen img'); 
    
    gsap.to('.about-imagen img', {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }
}