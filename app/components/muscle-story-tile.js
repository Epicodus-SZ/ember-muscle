import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
   goToStory(story) {
     console.log("go to story sent=",story.id);
    //  var newRental = this.store.createRecord('rental', params);
    //  newRental.save();
    //this.transitionTo('story', story);
     this.sendAction('goToStory', story);
    }
  }
});
