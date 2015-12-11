
Meteor.startup(function () {
  console.log("Package activity-enrollments startup...");
  console.log("Session.set('hasPackageActivityEnrollments', true);");
  Session.set('hasPackageActivityEnrollments', true);
});
