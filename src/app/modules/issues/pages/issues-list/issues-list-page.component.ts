import { Component, inject } from '@angular/core';
import { IssuesService } from '../../services/issues.service';
import { LabelsSelectorComponent } from "../../components/labels-selector/labels-selector.component";
import { IssueItemComponent } from "../../components/issue-item/issue-item.component";
import { State } from '../../interfaces';

@Component({
  selector: 'issues-list-page',
  standalone: true,
  imports: [
    LabelsSelectorComponent,
    IssueItemComponent
],
  templateUrl: './issues-list-page.component.html',
  styles: ``,
})
export default class IssuesListPageComponent {

  public issueService = inject(IssuesService);

  get labelsQuery() {
    return this.issueService.labelsQuery;
  }

  get issuesQuery() {
    return this.issueService.issuesQuery;
  }

  public onChangeState(newState: string) {
    const state = {
      'all': State.All,
      'open': State.Open,
      'closed': State.Closed,
    }[newState] ?? State.All
    this.issueService.showIssueByState(state);
  }

}
