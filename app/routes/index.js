import Route from '@ember/routing/route';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';

const TIMEOUT = 2000;

export default Route.extend({
  model() {
    return new Promise((resolve) => {
      later(this, () => resolve([
        { firstName: 'Jon', lastName: 'Snow' },
        { firstName: 'Davos', lastName: 'Seaworth' },
        { firstName: 'Tormund', lastName: 'Giantsbane' }
      ]), TIMEOUT);
    });
  }
});
