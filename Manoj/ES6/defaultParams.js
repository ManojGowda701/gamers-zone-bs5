//Default Parameters
function eLearn(message='Welcome to ELearn') {
    console.log(message);
}
eLearn();
eLearn(undefined);
eLearn('Elearn is learning platform')


//Rest Operator
function eLearn(course1, course2, ...courses) { 
    return courses;
  }
  
  eLearn("FullStack", "DataAnalysis", "Java", "Web Developement", "Python");


//Spread Operator (used rest operator too)
function eLearn(course1, course2, ...courses) { 
    return `The ${course1} ${course2} are most popular courses while ${courses} are bestselling`;
  }
eLearn(...["FullStack", "DataAnalysis", "Java", "Web Developement", "Python"]);