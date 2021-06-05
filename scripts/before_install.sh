#!/bin/bash
cd /home/ubuntu/storyar-fe
curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -
apt install -y nodejs 
apt install -g npm@7.5.4