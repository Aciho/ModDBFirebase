import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('mods', function() {
    this.route('filter');
    this.route('show', { path: '/:mod_id' });
    this.route('all');
    this.route('ea');
    this.route('ma');
    this.route('la');
    this.route('xa');
    this.route('balance');
    this.route('tc');
    this.route('content');
    this.route('others');
  });
});

export default Router;
