import Ember from 'ember';
const { get, set } = Ember;

export default Ember.Route.extend({

  onStateChange: (snapshot) => {
    // self.uploading = true;
    // self.uploadFraction = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  },
  uploaddommod: (file) => {

    try {
      this.get('firebaseUtil').uploadFile('mods/foo.jpg', file.blob, {}, self.onStateChange).then(downloadURL => {
        console.log(downloadURL);
        // self.uploading = false;
      }).catch(error => {
        console.log(error);
      });
    }
    catch(err) {
      console.log(err);
    }
  },

  actions: {
    uploadImage(file) {
      get(this, 'uploaddommod')(file);
    }
  }
});
