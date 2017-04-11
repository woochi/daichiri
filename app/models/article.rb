class Article < ApplicationRecord
  include PgSearch

  pg_search_scope :search, against: %i(author title body)
end
