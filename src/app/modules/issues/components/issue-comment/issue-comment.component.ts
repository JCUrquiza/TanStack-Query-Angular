import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { GitHubIssue } from '../../interfaces';

@Component({
  selector: 'issue-comment',
  standalone: true,
  imports: [
    CommonModule,
    MarkdownModule
  ],
  templateUrl: './issue-comment.component.html',
  styles: ``
})
export class IssueCommentComponent {

  public issue = input.required<GitHubIssue>();


}
