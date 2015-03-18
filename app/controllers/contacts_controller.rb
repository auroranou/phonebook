class ContactsController < ApplicationController

  before_action :set_contact, only: [:show, :update, :destroy]

  def index
    @contacts = Contact.all.order(last_name: :asc)
    respond_to do |format|
      format.html
      format.json { render json: @contacts, status: 200 }
    end
  end

  def show
    render json: @contact.to_json, status: 200
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      render json: @contact.to_json, status: 200
    else
      render json: { error: 'Error saving', status: 400}
    end
  end

  def update
    if @contact.update(contact_params)
      render json: @contact.to_json, status: 200
    end
  end

  def destroy
    if @contact.destroy
      render json: @contact.to_json, status: 200
    end
  end

  private

  def set_contact
    @contact = Contact.find(params[:id])
  end

  def contact_params
    params.require(:contact).permit(:last_name, :first_name, :phone_num)
  end

end