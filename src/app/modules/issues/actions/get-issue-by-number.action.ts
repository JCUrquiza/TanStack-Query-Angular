import { environment } from "../../../../environments/environment.development";
import { sleep } from "../../../helpers";
import { GitHubIssue } from "../interfaces";

const BASEURL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getIssueByNumber = async( issueNumber: string ): Promise<GitHubIssue> => {

  await sleep(1500);

  try {

    const resp = await fetch(`${ BASEURL }/issues/${ issueNumber }`, {
      headers: {
        Authorization: `Bearer ${ GITHUB_TOKEN }`
      }
    });

    if ( !resp.ok ) throw "Can't load the issue";

    const issue: GitHubIssue = await resp.json();
    console.log(issue);

    return issue;
  } catch (error) {
    throw "Can't load the issue";
  }

}

