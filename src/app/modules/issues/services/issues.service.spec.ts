import { TestBed } from '@angular/core/testing';
import { provideAngularQuery, QueryClient } from '@tanstack/angular-query-experimental';
import { IssuesService } from './issues.service';
import { State } from '../interfaces';

const labelAccessibility = 'Accessibility';

describe(`IssuesService`, () => {

  let service: IssuesService;
  const queryClient = new QueryClient();

  beforeEach(() => {
    TestBed.configureTestingModule({
      teardown: {
        destroyAfterEach: false,
      },
      providers: [ provideAngularQuery(queryClient) ]
    });
    service = TestBed.inject(IssuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load labels', async() => {
    const { data } = await service.labelsQuery.refetch();
    expect(data?.length).toBe(30);

    const [label] = data!;
    // console.log(label);
    expect(typeof label.color).toBe('string');
    expect(typeof label.default).toBe('boolean');
    expect(typeof label.description).toBe('string');
    expect(typeof label.id).toBe('number');
    expect(typeof label.name).toBe('string');
    expect(typeof label.node_id).toBe('string');
    expect(typeof label.url).toBe('string');
  });

  it('should set selected state, OPEN, CLOSED, All', async() => {
    service.showIssueByState(State.Closed);
    expect(service.selectedState()).toBe(State.Closed);

    const { data } = await service.issuesQuery.refetch();

    data!.forEach(issue => {
      expect(issue.state).toBe(State.Closed);
    });
  });

  it('should set selectedLabels', () => {
    service.toggleLabel(labelAccessibility);
    expect(service.selectedLabels().has(labelAccessibility)).toBeTruthy();

    service.toggleLabel(labelAccessibility);
    expect(service.selectedLabels().has(labelAccessibility)).toBeFalsy();
  });

  it('should set selectedLabels and get issues by label', async() => {
    service.toggleLabel(labelAccessibility);
    expect(service.selectedLabels().has(labelAccessibility)).toBeTruthy();

    const { data } = await service.issuesQuery.refetch();

    data?.forEach(issue => {
      const hasLabel = issue.labels.some((l) => l.name === labelAccessibility);
      expect(hasLabel).toBeTrue();
    });
  });

});

