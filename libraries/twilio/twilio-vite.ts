import t from "twilio";
const accountSid = import.meta.env.TWILIO_ACCOUNT_SID
const authToken = import.meta.env.TWILIO_AUTH_TOKEN
export const twilio = t(accountSid, authToken);
