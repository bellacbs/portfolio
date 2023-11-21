import {useState, useEffect, useContext} from "react";
import "./style.scss";
import Button from "../../components/button/Button";
import {gitHubProjects, socialMedia} from "../../portfolio";
import StyleContext from "../../global/StyleContext";
import GithubRepositoryCard from "../../components/githubCard/GithubCard";
import { PinnedItem } from "../../global/types";

const GitHub = () => {
  const [gitHubUrl, setGitHubUrl] = useState<string>("")
  const {isDark, gitHubData} = useContext(StyleContext);
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
        <div className="main" id="gitHubProjects">
          <h1 className="project-title">GitHub Projects</h1>
          <div className="repo-cards-div-main">
            {(typeof projects !== "string") && projects.map((repository:  PinnedItem, index) => {
              if (!repository) {
                console.error(
                  `Github Object for repository number : ${index} is undefined`
                );
              }
              return (
                <GithubRepositoryCard repository={repository} key={repository.node.id} isDark={isDark as boolean} />
              );
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={gitHubUrl}
            newTab={true}
          />
        </div>
    );
  } else {
    return null;
  }
}

export default GitHub;
