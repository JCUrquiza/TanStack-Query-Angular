import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'issue-page',
  standalone: true,
  imports: [],
  templateUrl: './issue-page.component.html',
  styles: ``
})
export default class IssuePageComponent {

  route = inject(ActivatedRoute);
  issueService = inject(IssueService);

  issueNumber = toSignal<string>(
    this.route.paramMap.pipe(
      map((params) => params.get('number') ?? ''),
      tap( console.log ),
      tap( (number) => this.issueService.setIssueNumber(number) )
    )
  );

}
