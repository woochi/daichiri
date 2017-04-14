class ArticleIdToUuid < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :uuid, :uuid, default: "uuid_generate_v4()", null: false

    change_table :articles do |t|
      t.remove :id
      t.rename :uuid, :id
    end

    execute "ALTER TABLE articles ADD PRIMARY KEY (id);"
  end
end
