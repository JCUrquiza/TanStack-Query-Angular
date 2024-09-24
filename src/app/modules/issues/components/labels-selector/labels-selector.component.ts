import { Component, inject, input } from '@angular/core';
import { GitHubLabel } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'issues-labels-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labels-selector.component.html',
  styles: ``
})
export class LabelsSelectorComponent {

  labels = input.required<GitHubLabel[]>();

  private issuesService = inject(IssuesService);

  isSelected(labelName: string) {
    return this.issuesService.selectedLabels().has(labelName);
  }

  public onToggleLabel(labelName: string) {
    this.issuesService.toggleLabel(labelName);
  }

}
