# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"
  config.vm.box_check_update = false
  config.vm.network "forwarded_port", guest: 4000, host: 4000
  config.vm.synced_folder ".", "/app"

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "1024"
  end

  config.vm.provision "shell", path: '.vagrant/provision/system.sh', privileged: true
  config.vm.provision "shell", path: '.vagrant/provision/rvm.sh',    privileged: false
  config.vm.provision "shell", path: '.vagrant/provision/ruby.sh',   privileged: false
  config.vm.provision "shell", path: '.vagrant/provision/jekyll.sh', privileged: false
  config.vm.provision "shell", path: '.vagrant/provision/nodejs.sh', privileged: true
end
