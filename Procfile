# tailor node to a 512M memeory container
# web: node --optimize_for_size --max_old_space_size=460 --gc_interval=100 dist/app.js
web: pm2 start dist/app.js -i max && pm2 logs all

# tailor node to a more memeory, 1.5G container, increase the max space size 
# web: node --optimize_for_size --max_old_space_size=920 --gc_interval=100 dist/app.js
