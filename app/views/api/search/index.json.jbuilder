formattedResults = {
  "Book" => [],
}


@results.each do |result|
  formattedResults[result.searchable_type] << result.searchable
end

json.extract!(formattedResults, "Book")
