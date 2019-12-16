/**
 * Route for the path `/contactform` as defined in `../contactform-route-map.js.es6`.
 */
export default Discourse.Route.extend({
  renderTemplate() {
    // Renders the template `../templates/contactform.hbs`
    this.render('contactform');
  }
});
