import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Route.extend({
  actions: {
    uploadImage(file) {
      Ember.get(this, 'uploaddommod').perform(file);
    }
  },

  uploaddommod: task(function * (file) {
    function onStateChange(snapshot) {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

      console.log('Upload is ' + progress + '% done');
    }

    let product = this.modelFor('product');
    let dommod = Ember.get(this, 'store').createRecord('dom-mod', {
      product,
      filename: Ember.get(file, 'name'),
      filesize: Ember.get(file, 'size')
    });
    try {
      this.get('firebaseUtil').uploadFile('mods/foo.jpg', file.blob).then(downloadURL => {
        console.log(downloadURL);
      }).catch(error => {
        console.log(error);
      });

      // file.readAsDataURL().then(function (url) {
      //   if (get(dommod, 'url') == null) {
      //     set(dommod, 'url', url);
      //   }
      // });
      //
      // let response = yield file.upload('/api/images/upload');
      // set(dommod, 'url', response.headers.Location);
      // yield dommod.save();
    }
    catch(err) {
      console.log(err);
    }
  }).maxConcurrency(3).enqueue(),

});
