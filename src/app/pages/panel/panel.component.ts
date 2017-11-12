import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  showText: Boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  CreatePost() {
    this.showText = !this.showText;
    this.router.navigate(['/panel/create_post']);
  }

  EditPost() {
    this.showText = !this.showText;
//    this.router.navigate(['/panel/edit_post']);
  }

  atras() {
    this.showText = !this.showText;
//    this.router.navigate(['/panel']);
  }

}
