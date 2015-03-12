How to build:

1) Install NodeJS (on Ubuntu):
sudo apt-get install nodejs

2) Build an optimized version:
node r.js -o build.js

3) Build an unoptimized version
node r.js -o build.js optimize=none 
or
node r.js -o build_no_opt.js


4) Use jquery on cdn
In main.js: 
requirejs.config({
    "paths": {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min'
    }
});

node r.js -o build_jquery_on_cdn.js


5) Build for client without requirejs:
node r.js -o build_without_require.js


 






General instruction on build setup is available at: http://requirejs.org/docs/optimization.html


