import { Component, input } from '@angular/core';
import { GitHubLabel } from '../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'issues-labels-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labels-selector.component.html',
  styles: ``
})
export class LabelsSelectorComponent {

  labels = input.required<GitHubLabel[]>();

}
