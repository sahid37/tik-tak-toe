import { Component, Input } from '@angular/core';
import { faPen, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() iconName!: string;

  faPen = faPen;
  faCircle = faCircle;
  faTimes = faTimes;
}
