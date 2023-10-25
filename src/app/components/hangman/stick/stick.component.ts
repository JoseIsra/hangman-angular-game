import { Component, Input } from '@angular/core';
type BodyPart = 'body' | 'left-arm' | 'left-leg' | 'right-arm' | 'right-leg';

@Component({
  selector: 'app-stick',
  styleUrls: ['./stick.component.scss'],
  templateUrl: './stick.component.html',
})
export class StickComponent {
  @Input() bodyPart: BodyPart = 'body';

  classesMap: Record<BodyPart, BodyPart> = {
    body: 'body',
    'right-arm': 'right-arm',
    'right-leg': 'right-leg',
    'left-arm': 'left-arm',
    'left-leg': 'left-leg',
  };
}
