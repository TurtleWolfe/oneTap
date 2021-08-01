import Bugsnag, { NotifiableError } from "@bugsnag/expo";

const log = (error: NotifiableError) => Bugsnag.notify(error);
const notify = (error: NotifiableError) => Bugsnag.notify(error);
const start = () => Bugsnag.start();

export default {
  log,
  notify,
  start
};
