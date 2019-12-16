import { popupAjaxError } from "discourse/lib/ajax-error";
import { ajax } from "discourse/lib/ajax";

export default Ember.Controller.extend({
  actions: {
    submitSupportRequest(content) {
      if (!content) {
        return;
      }

      //https://github.com/discourse/discourse/blob/5f1e346e1622722626e6f10df4363474016b20dd/script/import_scripts/base.rb#L534
      ajax("/support", {
        method: 'POST',
        data: {
          title: "Hier der Titel",
          content: content
        }
      })
        .catch(error => {
          if (error) {
            popupAjaxError(error);
          } else {
            alert("unbekannter Fehler");
          }
        })
    }
  }
});
