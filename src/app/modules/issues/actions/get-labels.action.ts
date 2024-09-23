import { environment } from "../../../../environments/environment.development";
import { sleep } from "../../../helpers";
import { GitHubLabel } from "../interfaces";

const BASEURL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getLabels = async(): Promise<GitHubLabel[]> => {

  await sleep(1500);

  try {

    const resp = await fetch(`${ BASEURL }/labels`, {
      headers: {
        Authorization: `Bearer ${ GITHUB_TOKEN }`
      }
    });

    if ( !resp.ok ) throw "Can't load labels";

    const labels: GitHubLabel[] = await resp.json();
    console.log(labels);

    return labels;
  } catch (error) {
    throw "Can't load labels";
  }

}

