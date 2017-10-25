class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["invalid credentials"], status: 401
    end
  end

  def destroy
    unless logged_in?
      render json: ['bad logout'], status: 404
      return
    end
    logout
    render json: {}
  end

end
