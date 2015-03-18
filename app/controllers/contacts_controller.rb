class ContactsController < ApplicationController

  def index
    @contacts = Contact.all.order(last_name: :desc)
  end

  def show
  end

end