// define regex for email
const re = 	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// TODO: Remove last comma if there is no email address after it
export default (emails) => {
  const invalidEmails = emails.split(',')
    .map(email => email.trim())
    .filter(email => re.test(email) === false); // flip value, we need to include invalid emails instead

    if (invalidEmails.length) {
      return `These emails are invalid ${invalidEmails}`;
    }

    return; // return undefined if all emails are valid
};
