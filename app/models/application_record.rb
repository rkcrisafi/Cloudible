class ApplicationRecord < ActiveRecord::Base
  include PgSearch


  self.abstract_class = true

end
