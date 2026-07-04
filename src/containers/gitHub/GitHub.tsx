import {useState, useEffect, useContext} from "react";
import "./style.scss";
import Button from "../../components/button/Button";
import {gitHubProjects, socialMedia} from "../../portfolio";
import StyleContext from "../../global/StyleContext";
import GithubRepositoryCard from "../../components/githubCard/GithubCard";
import { PinnedItem } from "../../global/types";

const GitHub = () => {
  const [gitHubUrl, setGitHubUrl] = useState<string>("")
  const {gitHubData} = useContext(StyleContext);
  const [projects, setProjects] = useState<PinnedItem[] | string>("")
  const success: boolean = !(typeof projects === "string" || projects instanceof String) &&
  gitHubProjects.display

  const getGitHubUrl = () => {
    const url = socialMedia.data.filter(({socialMediaName}) => socialMediaName == "github")
    setGitHubUrl(url[0].href)
  }

  useEffect(() => {
    getGitHubUrl()
    typeof gitHubData !== "string" && setProjects(gitHubData.user.pinnedItems.edges)
  }, []);

  if ( success ) {
    return (
        <div className="section" id="gitHubProjects">
          <div className="wrap">
            <div className="section-head">
              <span className="section-label blue">Open source</span>
              <h2>GitHub Projects</h2>
            </div>
            <div className="repo-cards-div-main">
              {(typeof projects !== "string") && projects.map((repository:  PinnedItem, index) => {
                if (!repository) {
                  console.error(
                    `Github Object for repository number : ${index} is undefined`
                  );
                }
                return (
                  <GithubRepositoryCard repository={repository} key={repository.node.id} />
                );
              })}
            </div>
            <Button
              text={"More Projects"}
              className="btn-secondary project-button"
              href={gitHubUrl}
              newTab={true}
            />
          </div>
        </div>
    );
  } else {
    return null;
  }
}

export default GitHub;
