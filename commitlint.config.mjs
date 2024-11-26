export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-empty': [0], // Allow empty subjects
    'type-empty': [0],
  },
};
