import { environment } from "../../../../environments/environment.development";
import { sleep } from "../../../helpers";
import { GitHubIssue } from "../interfaces";

const BASEURL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getIssueCommentsByNumber = async( issueNumber: string ): Promise<GitHubIssue[]> => {

  await sleep(1500);

  try {

    const resp = await fetch(`${ BASEURL }/issues/${ issueNumber }/comments`, {
      headers: {
        Authorization: `Bearer ${ GITHUB_TOKEN }`
      }
    });

    if ( !resp.ok ) throw "Can't load comments of the issue";

    const issueComments: GitHubIssue[] = await resp.json();
    console.log(issueComments);

    return issueComments;
  } catch (error) {
    throw "Can't load comments of the issue";
  }

}

