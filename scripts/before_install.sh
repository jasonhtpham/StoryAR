#!/bin/bash
cd /home/ubuntu/storyar-fe
curl -sL https://deb.nodesource.com/setup_14.x | bash -
apt install -y nodejs 
npm install -g npm@7.5.4