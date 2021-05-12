json.extract! note, :id, :title, :content, :topic, :created_at, :updated_at
json.url note_url(note, format: :json)
