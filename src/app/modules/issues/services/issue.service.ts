import { Injectable, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { getIssueByNumber, getIssueCommentsByNumber } from '../actions';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private issueNumber = signal<string|null>(null);

  public issueQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber()],
    queryFn: () => getIssueByNumber(this.issueNumber()!),
    enabled: this.issueNumber() !== null
  }));

  public issueCommentsQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber(), 'comments'],
    queryFn: () => getIssueCommentsByNumber(this.issueNumber()!),
    enabled: this.issueNumber() !== null
  }));

  setIssueNumber( issueId: string ) {
    this.issueNumber.set(issueId);
  }

}


