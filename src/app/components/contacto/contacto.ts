import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-contacto',
  standalone: true,
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class ContactoComponent implements AfterViewInit {

  @ViewChild('letsTalk') letsTalk!: ElementRef;
  @ViewChild('sqlMarquee') sqlMarquee!: ElementRef; 

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#contacto',
        start: 'top 75%',
        toggleActions: "play none none reverse" 
      }
    });

    tl.from('#contacto .contacto-info', {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out'
    })
    .from('.contacto-item', {
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: 'power3.out',
      clearProps: "transform" 
    }, "-=0.8");

   
    gsap.to(this.letsTalk.nativeElement, {
      xPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '#contacto',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1 
      }
    });

    
    if (this.sqlMarquee) {
      gsap.to(this.sqlMarquee.nativeElement, {
        xPercent: -50,
        ease: 'none',
        duration: 20, 
        repeat: -1    
      });
    }
  }
}