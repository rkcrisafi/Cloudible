class Api::BooksController < ApplicationController

  def index
    @books = Book.all
  end

  def show
    @book = Book.find(params[:id]);
  end


  # def libraray_index
  #   @books = current_user.books
  # end

  # def create
  #   @library_item = Library.new( book_id: params[:id], user_id: current_user.id )
  #
  #   if @library_item.save
  #     render :show
  #   else
  #     render json: @library.item.full_messages, status: 422
  #   end
  # end
  #
  # def destroy
  #   @library_item = Library.find(book_id: params[:id], user_id: current_user.id )
  #   @library_item.destroy
  #
  #
  # end

end
