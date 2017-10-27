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

  def show
    
  end


  def update
    if params[:type] == 'add' && params[:id].to_i == current_user.id
      @library_item = Library.new( book_id: params[:book_id], user_id: params[:id])
      if @library_item.save
        @book = Book.find(params[:book_id])
        render 'api/books/show'
      else
        render json: @library_item.errors.full_messages, status: 422
      end

    elsif params[:type] == 'remove' && params[:id].to_i == current_user.id
      @library_item = current_user.libraries.find_by(book_id: params[:book_id])
      @library_item.destroy
      render json: params[:book_id]
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name)
  end

end
