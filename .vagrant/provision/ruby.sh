#!/usr/bin/env bash

source $HOME/.rvm/scripts/rvm || source /etc/profile.d/rvm.sh
rvm use $(cat /app/.ruby-version) --install --default
shift
rvm cleanup all
