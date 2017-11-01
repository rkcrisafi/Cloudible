class Api::RatingsController < ApplicationController

  def create
    @rating = Rating.new(rating_params)
    @rating.user_id = current_user.id;

    if rating.save

    else
      render json: review.errors.full_massages, status: 422
    end

  end

  def update
  end



  private

  def rating_params
    params.require(:rating).permit(:overall, :performance, :story)
  end


end
