import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('musclestory');
  },
  actions: {
   goToStory(story) {
     this.transitionTo('musclestory', story);
    }
  }
});
