class Api::UsersController < ApplicationController
  def new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  def update
    if params[:type] == 'add' && params[:user_id] == current_user.id
      @library_item = Library.new( book_id: params[:book_id], user_id: params[:user_id])

      if @library_item.save
        render :show
      else
        render json: @library.item.full_messages, status: 422
      end
      render :show
    else
      @library_item = current_user.book.find(params[:book_id])
      @library_item.destroy
      render :show
    end

  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name)
  end

end
