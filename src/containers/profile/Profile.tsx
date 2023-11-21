import {useState, useEffect, useContext} from "react";
import {gitHubProjects} from "../../portfolio";
import Contact from "../../components/contact/Contact";
import ProfileCard, { User } from "../../components/profileCard/ProfileCard";
import StyleContext from "../../global/StyleContext";

export default function Profile() {
  const {gitHubData} = useContext(StyleContext);
  const [user, setUser] = useState<User | string>("");

  useEffect(() => {
    if (gitHubProjects.showGithubProfile === "true") {
      if (typeof gitHubData != "string") {
        setUser(gitHubData.user);
      }else{
        gitHubProjects.showGithubProfile = "false";
      }
    }
  }, []);
  if (
    gitHubProjects.display &&
    gitHubProjects.showGithubProfile === "true" &&
    !(typeof user === "string" || user instanceof String)
  ) {
    return (
      <ProfileCard user={user} />
    );
  } else {
    return <Contact />;
  }
}
