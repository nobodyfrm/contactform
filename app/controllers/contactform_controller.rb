class ContactformController < ApplicationController

  def index

  end

  def submit
    # params[:note_id]

    user = User.find(-1)

    opts = {}
    opts[:skip_validations] = true
    opts[:title] = params[:title]
    opts[:raw] = params[:content]

    post_creator = PostCreator.new(user, opts)
    post = post_creator.create

    post && post_creator.errors.empty? ? post : post_creator.errors.full_messages
  end

end
