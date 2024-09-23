import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GitHubIssue, State } from '../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'issue-item',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './issue-item.component.html',
  styles: ``
})
export class IssueItemComponent {

  public issue = input.required<GitHubIssue>();

  get isOpen() {
    return this.issue().state === State.Open;
  }

}
