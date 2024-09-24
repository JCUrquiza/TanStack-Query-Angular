import { environment } from "../../../../environments/environment.development";
import { sleep } from "../../../helpers";
import { GitHubIssue, State } from "../interfaces";

const BASEURL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getIssues = async(
  state: State = State.All,
  selectedLabels: string[],
): Promise<GitHubIssue[]> => {

  await sleep(1500);

  const params = new URLSearchParams();
  params.append('state', state);

  if (selectedLabels.length > 0) {
    params.append('labels', selectedLabels.join(','))
  }

  try {

    const resp = await fetch(`${ BASEURL }/issues?${ params }`, {
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

