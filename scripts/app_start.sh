#!/bin/bash
cd /home/ubuntu/storyar-fe
pm2 start npm --name "storyar-fe" -- start
pm2 startup
pm2 save
pm2 restart all