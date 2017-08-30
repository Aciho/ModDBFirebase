import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    closeDialog() {
      this.get('closeDialog')()
    },
    uploadArchive(file) {
      try {
        this.get('firebaseUtil').uploadFile('mods/foo.jpg', file.blob, {}, this.onStateChange).then(downloadURL => {
          console.log(downloadURL);
          // self.uploading = false;
        }).catch(error => {
          console.log(error);
        });
      }
      catch(err) {
        console.log(err);
      }
    }
  }
});
