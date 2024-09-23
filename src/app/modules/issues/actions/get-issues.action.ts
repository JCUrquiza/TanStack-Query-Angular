import { environment } from "../../../../environments/environment.development";
import { sleep } from "../../../helpers";
import { GitHubIssue } from "../interfaces";

const BASEURL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getIssues = async(): Promise<GitHubIssue[]> => {

  await sleep(1500);

  try {

    const resp = await fetch(`${ BASEURL }/issues`, {
      headers: {
        Authorization: `Bearer ${ GITHUB_TOKEN }`
      }
    });

    if ( !resp.ok ) throw "Can't load issues";

    const issues: GitHubIssue[] = await resp.json();
    console.log(issues);

    return issues;
  } catch (error) {
    throw "Can't load issues";
  }

}

