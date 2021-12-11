import aboutMe from "./aboutMe.json";
import blogSite from "./blogSite.json";
import catPix from "./catPix.json";
import foodButton from "./foodButton.json";
import linkedinPollGen from "./linkedinPollGen.json";
import locationManager from "./locationManager.json";
import projectPortfolio from "./projectPortfolio.json";
import randomQuoteMachine from "./randomQuoteMachine.json";
import rental from "./rental.json";
import techCareerGrowthNavigator from "./techCareerGrowthNavigator.json";

const projects = [
  aboutMe,
  blogSite,
  catPix,
  foodButton,
  linkedinPollGen,
  locationManager,
  projectPortfolio,
  randomQuoteMachine,
  rental,
  techCareerGrowthNavigator,
];

function calculateProjectTotalStoryPoints(projects) {
  projects.forEach((project) => {
    // for some reason I have each project in an array
    const totalStoryPoints = project[0].stories.reduce((accum, curr) => {
      return (accum += curr.storyPoints);
    }, 0);
    console.log(
      "Project Name: ",
      project[0].name,
      "Total Story Points: ",
      totalStoryPoints
    );
  });
}

calculateProjectTotalStoryPoints(projects);
