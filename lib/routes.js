Router.map(function() {
  // USERS ENROLLMENTS
  // -------------------------------------------------------
  this.route('userEnrollments', {
    template: 'userEnrollments',
    path: '/user/:_id/enrollments',
    waitOn: function () {
      Meteor.subscribe('user', this.params._id);
      return Meteor.subscribe('userEnrollmentsComposite', this.params._id);
    },
    data: function() {
      return {
        activities: Activities.find(),
        user: Meteor.users.findOne({_id: this.params._id}),
      };
    },
  });
});
