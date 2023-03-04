import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: any) {}
  elem;
  @ViewChild('image') image;

  ngOnInit() {
    this.elem = document.documentElement;
  }

  openFullscreen() {
    console.log('ok');
    if (this.image.requestFullscreen) {
      this.image.requestFullscreen();
    } else if (this.image.mozRequestFullScreen) {
      /* Firefox */
      this.image.mozRequestFullScreen();
    } else if (this.image.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.image.webkitRequestFullscreen();
    } else if (this.image.msRequestFullscreen) {
      /* IE/Edge */
      this.image.msRequestFullscreen();
    }
  }

  /* Close fullscreen */
  closeFullscreen() {
    if (document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }
}
