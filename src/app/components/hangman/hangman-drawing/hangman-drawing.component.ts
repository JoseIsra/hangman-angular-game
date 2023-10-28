import {
  Component,
  Input,
  OnInit,
  ViewContainerRef,
  ViewChild,
} from '@angular/core';
import { HeadComponent } from '../head/head.component';
import { StickComponent } from '../stick/stick.component';
type ComponentType = typeof HeadComponent | typeof StickComponent;
export type LoadableComponent = {
  component: ComponentType;
  params?: {
    bodyPart: string;
  };
};

@Component({
  selector: 'app-hangman-drawing',
  templateUrl: './hangman-drawing.component.html',
  styleUrls: ['./hangman-drawing.component.scss'],
})
export class HangmanDrawingComponent implements OnInit {
  @Input() component!: LoadableComponent;
  @ViewChild('dynamic', { read: ViewContainerRef, static: true })
  componentLoader!: ViewContainerRef;
  ngOnInit(): void {
    const componentRef = this.componentLoader.createComponent<any>(
      this.component.component
    );
    if (this.component.params) {
      componentRef.instance.bodyPart = this.component.params.bodyPart;
    }
  }
}
