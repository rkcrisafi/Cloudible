class Api::RatingsController < ApplicationController

  def index
    @ratings = Rating.where(book_id: params[:book_id])
  end

  def create
    @rating = Rating.new(rating_params)
    @rating.user_id = current_user.id
    @rating.book_id = params[:book_id]
    debugger

    if @rating.save
      render :show
    else
      render json: @rating.errors.full_messages, status: 422
    end

  end

  def update
  end



  private

  def rating_params
    params.require(:rating).permit(:overall, :performance, :story)
  end


end
