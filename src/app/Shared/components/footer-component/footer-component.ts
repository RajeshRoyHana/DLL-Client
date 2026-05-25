import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-footer-component',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css',
})
export class FooterComponent {
  year = new Date().getFullYear();
}
