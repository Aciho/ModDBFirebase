import Ember from 'ember';
import { task } from 'ember-concurrency';
const { get, set } = Ember;

const { Controller, computed } = Ember;

export default Controller.extend({
  model() {
    return this.get('store').findAll('dom-mod');
  },

  actions: {
    toggleExpandedItem(value, ev) {
      if (this.get('expandedItem') === value) {
        value = null;
      }
      this.set('expandedItem', value);
      ev.stopPropagation();
    },
    showDialog() {
        this.set('showDialog', true);
    },
    closeDialog() {
      this.set('showDialog', false);
    },
    filterMods() {
      this.transitionToRoute('mods');
    },
    uploadImage(file) {
      this.get(this, 'uploaddommod').perform(file);
    }
  },

  expandedItem: computed('currentRouteName', function() {
    if (this.get('currentRouteName').substr(0, 6) === 'layout') {
      return 'layout';
    } else {
      return 'demos';
    }
  }),

  nationTypesExpanded: computed.equal('expandedItem', 'nationTypes'),
});
