import { Component } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  // constructor(private el: ElementRef, private renderer: Renderer2) {}

  // showSidebar() {
  //   const sidebar = this.el.nativeElement.querySelector('.sidebar');
  //   this.renderer.setStyle(sidebar, 'display', 'flex');
  //   setTimeout(() => {
  //     this.renderer.setStyle(sidebar, 'transform', 'translateX(0)');
  //   }, 10);
  // }

  // closeSidebar() {
  //   const sidebar = this.el.nativeElement.querySelector('.sidebar');
  //   this.renderer.setStyle(sidebar, 'transform', 'translateX(100%)');
  //   setTimeout(() => {
  //     this.renderer.setStyle(sidebar, 'display', 'none');
  //   }, 300);
  // }
}
