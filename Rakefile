# frozen_string_literal: true

require 'html-proofer'

task :test do
  sh "bundle exec jekyll build"
  options = { :assume_extension => true }
  HTMLProofer.check_directory("./_site", options).run
end

task 'assets:precompile' do
  exec('jekyll build')
end
