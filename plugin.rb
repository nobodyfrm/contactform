# name: contactform
# about: A super simple plugin to demonstrate how plugins work
# version: 0.0.1
# authors: nobodyfrm

enabled_site_setting :contactform_enabled

register_asset 'stylesheets/contactform.css'

after_initialize do
  load File.expand_path('../app/controllers/contactform_controller.rb', __FILE__)

  Discourse::Application.routes.append do
    get '/support' => 'contactform#index'
    post '/support' => 'contactform#submit'
  end

end
