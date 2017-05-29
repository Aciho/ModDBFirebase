import Ember from 'ember';
import { task } from 'ember-concurrency';
const { get, set } = Ember;

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('dom-mod');
  },

  uploaddommod: task(function * (file) {
    function onStateChange(snapshot) {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

      console.log('Upload is ' + progress + '% done');
    }

    let product = this.modelFor('product');
    let dommod = this.get('store').createRecord('dom-mod', {
      product,
      filename: get(file, 'name'),
      filesize: get(file, 'size')
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

  actions: {
    uploadImage(file) {
      get(this, 'uploaddommod').perform(file);
    }
  }
});
