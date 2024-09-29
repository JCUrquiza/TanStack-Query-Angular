import { environment } from "../../../../environments/environment.development";
import { getIssueCommentsByNumber } from "./get-issue-comments-by-number.action";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;
const issueNumber = '123';
const mockComments: any [] = [
  { id: 1, body: 'First comment', user: { login: 'user1' } },
  { id: 2, body: 'Second comment', user: { login: 'user2' } },
];

describe('getIssueCommentsByNumber', () => {

  it('should fetch issue comments successfully', async() => {
    const requestURL = `${ BASE_URL }/issues/${ issueNumber }/comments`;
    const issueComentsResponse = new Response( JSON.stringify(mockComments), {
      status: 200,
      statusText: 'ok'
    });
    spyOn(window, 'fetch').and.resolveTo(issueComentsResponse);

    await getIssueCommentsByNumber(issueNumber);

    expect(window.fetch).toHaveBeenCalledOnceWith(requestURL, {
      headers: {
        Authorization: `Bearer ${ GITHUB_TOKEN }`
      }
    });
  });

  it('should throw an error if the response is not ok', async() => {
    const issueComentsResponse = new Response(null, {
      status: 404,
      statusText: 'Not Found'
    });
    spyOn(window, 'fetch').and.resolveTo(issueComentsResponse);

    try {
      await getIssueCommentsByNumber(issueNumber);
      expect(false).toBeTruthy();
    } catch (error) {
      expect(error).toBe(`Can't load comments of the issue number: ${ issueNumber }`);
    }

  });

});

