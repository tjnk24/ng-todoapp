import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-hoc',
  templateUrl: './with-header-hoc.component.html',
  styleUrls: ['./with-header-hoc.component.scss']
})
export class WithHeaderHocComponent implements OnInit {
  @Input() icon: string;
  @Input() title: string;

  svgUrl: string = '';

  ngOnInit() {
    this.svgUrl = `/assets/icons/${this.icon}.svg`;
  }
}