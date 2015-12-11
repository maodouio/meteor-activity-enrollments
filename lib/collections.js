// ***************************************************************
// DOCUMENTS COLLECTION
// ***************************************************************

Enrollments = new Meteor.Collection('enrollments');

EnrollmentSchema = new SimpleSchema({
  userId: {
    type: String,
    autoValue: function() {
      if (this.isInsert) {
        return Meteor.userId();
      } else if (this.isUpsert) {
        return {
          $setOnInsert: Meteor.userId()
        };
      } else {
        this.unset();
      }
    },
    denyUpdate: true,
  },
  activityId: {
    type: String,
    max: 120,
  },
  headimgurl: {
    type: String,
    label: "headimgurl",
    optional: true
  },
  isRegistered: {
    type: Boolean,
    optional: true
  },
  // name: {
  //   type: String,
  //   label: "姓名",
  //   max: 120,
  //   optional: true
  // },
  // mobile: {
  //   type: Number,
  //   label: "手机",
  //   max: 100000000000,
  //   optional: true
  // },
  // email: {
  //   type: String,
  //   label: "邮箱",
  //   max: 120,
  //   optional: true
  // },
  // wechat: {
  //   type: String,
  //   label: "微信",
  //   max: 120,
  //   optional: true
  // },
  // message: {
  //   type: String,
  //   label: "留言",
  //   max: 1024,
  //   optional: true
  // },
  createdAt: {
    type: Date,
    label: "报名时间",
    optional: true,
    denyUpdate: true,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    }
  },
  updatedAt: {
    type: Date,
    label: "确认时间",
    optional: true,
    denyInsert: true,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    }
  }
});

// Must remember to attach the schema to the collection
Enrollments.attachSchema(EnrollmentSchema);

// Custom validation messages with SimpleSchema. Remove if not needed
Enrollments.simpleSchema().messages({
  required: "[label] is required",
  minString: "[label] must be at least [min] characters",
  maxString: "[label] cannot exceed [max] characters",
  minNumber: "[label] must be at least [min]",
  maxNumber: "[label] cannot exceed [max]",
  minDate: "[label] must be on or before [min]",
  maxDate: "[label] cannot be after [max]",
  minCount: "You must specify at least [minCount] values",
  maxCount: "You cannot specify more than [maxCount] values",
  noDecimal: "[label] must be an integer",
  notAllowed: "[value] is not an allowed value",
  expectedString: "[label] must be a string",
  expectedNumber: "[label] must be a number",
  expectedBoolean: "[label] must be a boolean",
  expectedArray: "[label] must be an array",
  expectedObject: "[label] must be an object",
  expectedConstructor: "[label] must be a [type]",
  regEx: [
  {msg: "[label] failed regular expression validation"},
  {exp: SimpleSchema.RegEx.Email, msg: "[label] must be a valid e-mail address"},
  {exp: SimpleSchema.RegEx.WeakEmail, msg: "[label] must be a valid e-mail address"},
  {exp: SimpleSchema.RegEx.Domain, msg: "[label] must be a valid domain"},
  {exp: SimpleSchema.RegEx.WeakDomain, msg: "[label] must be a valid domain"},
  {exp: SimpleSchema.RegEx.IP, msg: "[label] must be a valid IPv4 or IPv6 address"},
  {exp: SimpleSchema.RegEx.IPv4, msg: "[label] must be a valid IPv4 address"},
  {exp: SimpleSchema.RegEx.IPv6, msg: "[label] must be a valid IPv6 address"},
  {exp: SimpleSchema.RegEx.Url, msg: "[label] must be a valid URL"},
  {exp: SimpleSchema.RegEx.Id, msg: "[label] must be a valid alphanumeric ID"}
  ],
  keyNotInSchema: "[label] is not allowed by the schema"
});

