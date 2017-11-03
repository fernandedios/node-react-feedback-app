// define regex for email
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails) => {
  const invalidEmails = emails.split(',')
    .map(email => email.trim())
    .filter(email => re.test(email) === false); // flip value, we need to include invalid emails instead

    if (invalidEmails.length) {
      return `These emails are invalid ${invalidEmails}`;
    }

    return; // return undefined if all emails are valid
};
