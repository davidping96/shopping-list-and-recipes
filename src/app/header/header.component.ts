import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<string>();

  activeLink = 'recipes';

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
    this.activeLink = feature;
    // Clear the active class and add it to the link you just clicked
  }

}
