# frozen_string_literal: true

namespace :build do
  desc 'Build development'
  task :development do
    exec('jekyll build --config _config.yml')
  end

  desc 'Build staging'
  task :staging do
    exec('JEKYLL_ENV=staging jekyll build --config _config.staging.yml')
  end

  desc 'Build production'
  task :production do
    exec('JEKYLL_ENV=production jekyll build --config _config.production.yml')
  end
end

namespace :development do
  desc 'Install all development gems and linters'
  task :prepare do
    puts 'Development preparing ...'
    exec('npm install')
    puts 'Done!'
  end
end

desc 'Lint all'
task :lint do
  exec('rake lint:styles')
  exec('rake lint:javascript')
end

namespace :lint do
  desc 'Lint *.html files'
  task :html do
    require 'html-proofer'
    sh 'bundle exec jekyll build'

    options = {
      assume_extension: true,
      disable_external: true,
      report_invalid_tags: true
    }

    HTMLProofer.check_directory("./_site", options).run
  end

  desc 'Lint *.scss files'
  task :styles do
    exec('bundle exec scss-lint -c .quality/.scss-lint.yml')
  end

  desc 'Lint *.javascript files'
  task :javascript do
    exec('./node_modules/eslint/bin/eslint.js ./javascripts/main.js -c ./.quality/.eslintrc.yml')
  end
end

namespace :server do
  desc 'Installs locally ansible requirements'
  task :requirements do
    exec('ansible-galaxy install -r ./.provision/requirements.yml')
  end

  desc 'Prepare remote system for provision'
  task :prepare do
    exec('ansible-playbook ./.provision/prepare.yml -i ./.provision/hosts')
  end

  desc 'Installs remotely application dependencies'
  task :provision do
    exec('ansible-playbook ./.provision/provision.yml -i ./.provision/hosts')
  end

  desc 'Deliver code to server'
  task :deliver do
    exec('ansible-playbook ./.provision/deliver.yml -i ./.provision/hosts')
  end

  desc 'Configure nginx'
  task :nginx do
    exec('ansible-playbook ./.provision/nginx.yml -i ./.provision/hosts')
  end

  namespace :check do
    desc 'Check preparation remote system for provision'
    task :prepare do
      exec('ansible-playbook ./.provision/prepare.yml -i ./.provision/hosts -vvv --check')
    end

    desc 'Check installation remotely application dependencies'
    task :provision do
      exec('ansible-playbook ./.provision/provision.yml -i ./.provision/hosts -vvv --check')
    end

    desc 'Check delivery code to server'
    task :deliver do
      exec('ansible-playbook ./.provision/deliver.yml -i ./.provision/hosts  -vvv --check')
    end
  end
end
