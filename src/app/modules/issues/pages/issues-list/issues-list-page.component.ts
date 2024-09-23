import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IssuesService } from '../../services/issues.service';
import { LabelsSelectorComponent } from "../../components/labels-selector/labels-selector.component";

@Component({
  selector: 'issues-list-page',
  standalone: true,
  imports: [
    RouterLink,
    LabelsSelectorComponent
  ],
  templateUrl: './issues-list-page.component.html',
  styles: ``,
})
export default class IssuesListPageComponent {

  public issueService = inject(IssuesService);

  get labelsQuery() {
    return this.issueService.labelsQuery;
  }

}
