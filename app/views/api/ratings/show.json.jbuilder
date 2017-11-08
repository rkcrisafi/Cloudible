# @ratings.each do |rating|
#   json.set! rating.id do
#     json.extract! rating, :overall, :story, :performance
#   end
# end

json.extract! @rating, :overall, :story, :performance
