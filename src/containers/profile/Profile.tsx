import React, {useState, useEffect, lazy, Suspense} from "react";
import {gitHubProjects} from "../../portfolio";
import Contact from "../../components/contact/Contact";
import Loading from "../../components/loading/Loading";
import { User } from "../../components/profileCard/ProfileCard";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/profileCard/ProfileCard")
);
export default function Profile() {
  const [user, setUser] = useState<User | string>("");
  function setProfileFunction(array: User | string) {
    setUser(array);
  }

  useEffect(() => {
    if (gitHubProjects.showGithubProfile === "true") {
      const getProfileData = () => {
        fetch("/profile.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
          })
          .then(response => {
            setProfileFunction(response.data.user);
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
            );
            setProfileFunction("Error");
            gitHubProjects.showGithubProfile = "false";
          });
      };
      getProfileData();
    }
  }, []);
  if (
    gitHubProjects.display &&
    gitHubProjects.showGithubProfile === "true" &&
    !(typeof user === "string" || user instanceof String)
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard user={user} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}
