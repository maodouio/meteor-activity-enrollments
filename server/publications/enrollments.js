Meteor.publishComposite("userEnrollmentsComposite", function(userId) {
  return {
    find: function() {
      return Enrollments.find({userId: userId});
    },
    children: [
      {
        find: function(enrollment) {
          return Activities.find({_id: enrollment.activityId});
        },
        children: [
          {
            find: function(activity) {
              return Like.collection.find({linkedObjectId: activity._id});
            }
          },
          {
            find: function(activity) {
              return Enrollments.find({activityId: activity._id});
            }
          },
          {
            find: function(activity) {
              // Find activity picture
              return Images.find({_id: activity.picture});
            }
          },
          {
            find: function(activity) {
              return Meteor.users.find({_id: activity.userId});
            }
          }
        ]
      },
      {
        find: function() {
          return Meteor.users.find({_id: userId});
        }
      }
    ]
  }
});
