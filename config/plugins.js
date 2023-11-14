module.exports = ({ env }) => ({
    comments: {
      enabled: true,
      config: {
        badWords: true,
        moderatorRoles: ["Authenticated"],
        approvalFlow: ["api::page.page"],
        entryLabel: {
          "*": ["Title", "title", "Name", "name", "Subject", "subject"],
          "api::page.page": ["MyField"],
        },
        blockedAuthorProps: ["name", "email"],
        reportReasons: {
          MY_CUSTOM_REASON: "MY_CUSTOM_REASON",
        },
        gql: {
            "auth": true // Default: false
        },
      },
    },
  });