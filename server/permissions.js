Enrollments.allow({
  insert: function (userId, doc) {
    // Free-for-all!
    //console.log('insert failed');
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    // Free-for-all!
    return true;
  },
  remove: function (userId, doc) {
    // Free-for-all!
    return true;
  }
});
