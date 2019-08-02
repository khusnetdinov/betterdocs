# frozen_string_literal: true

require 'jekyll'

Jekyll::Hooks.register :site, :post_write do |site|
  current_lang = site.config['lang']
  default_lang = site.config['default_lang']

  if current_lang == default_lang
    path = "#{site.source}/_site/"
    allowed = site.config['allowed'].map { |file| path + file }

    Pathname.new(path).each_child do |file_path|
      unless (file_path.to_s.end_with?('.html') || allowed.include?(file_path.to_s))
        file_path.delete
      end
    end
  else
    path = "#{site.source}/_site/#{current_lang}/"
    excluded = site.config['exclude_from_localizations'].map { |file| path + file }

    Pathname.new(path).each_child do |file_path|
      if excluded.include?(file_path.to_s)
        file_path.each_child.map(&:delete) if file_path.directory?
        file_path.delete
      end
    end
  end
end
