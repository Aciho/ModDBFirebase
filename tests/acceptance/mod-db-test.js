import { test } from 'qunit';
import moduleForAcceptance from 'mod-dbfirebase/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | mod db');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/mods', 'should automatically redirect to mods');
  });
});

test('there should be an about page', function (assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function() {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('Should list uploaded mods', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(find('.mod-summary').length, 3, 'should see 3 mods');
  });
});
test('Clicking on mod should show more information', function (assert) {
});
test('Should be able to download the mods as a zip file', function (assert) {
});
test('Mods should show image, title and subtitle', function (assert) {
});
test('Should allow users to rate mods', function (assert) {
});
test('Should show user rating', function (assert) {
});
test('Should allow users to add comments or bug reports', function (assert) {
});
test('Should show comments and bug reports', function (assert) {
});
test('Users should be able to log in', function (assert) {
});
test('Logged in users should be able to upload mods', function (assert) {
});
test('Users should be able to update their own mods', function (assert) {
});
test('Mods should be stored unpacked for use by the inspector', function (assert) {
});
test('Should expose an API to the inspector', function (assert) {
});
test('Should be able to filter mods', function (assert) {
});
// test('', function (assert) {
// });

