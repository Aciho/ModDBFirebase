import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    closeDialog() {
      this.get('closeDialog')()
    },
    uploadArchive() {
      this.get('uploadArchive')()
    }
  }
});
