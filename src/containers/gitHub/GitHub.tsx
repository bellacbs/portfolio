import {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./style.scss";
import Button from "../../components/button/Button";
import {gitHubProjects, socialMedia} from "../../portfolio";
import StyleContext from "../../global/StyleContext";
import Loading from "../../components/loading/Loading"; 
import { PinnedItem } from "./types";

const GitHub = () => {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubCard/GithubCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState<PinnedItem[] | string>([]);
  const [gitHubUrl, setGitHubUrl] = useState<string>("")
  // todo: remove useContex because is not supported
  const {isDark} = useContext(StyleContext);

  const getGitHubUrl = () => {
    const url = socialMedia.data.filter(({socialMediaName}) => socialMediaName == "github")
    setGitHubUrl(url[0].href)
  }

  useEffect(() => {
    getGitHubUrl()
    const getRepoData = () => {
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then(response => {
          setrepoFunction(response.data.user.pinnedItems.edges);
        })
        .catch(function (error) {
          console.error(
            `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
          );
          setrepoFunction("Error");
        });
    };
    getRepoData();
  }, []);

  function setrepoFunction(array: PinnedItem[] | string) {
    setrepo(array);
  }
  if (
    !(typeof repo === "string" || repo instanceof String) &&
    gitHubProjects.display
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="gitHubProjects">
          <h1 className="project-title">GitHub Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              if (!v) {
                console.error(
                  `Github Object for repository number : ${i} is undefined`
                );
              }
              return (
                <GithubRepoCard repo={v} key={v.node.id} isDark={isDark as boolean} />
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
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}

export default GitHub;
