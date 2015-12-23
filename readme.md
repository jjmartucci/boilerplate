# Boilerplate
Code I use for getting a site off the ground.

Includes [Scotch Box](https://box.scotch.io/) as a Vagrant VM with xdebug added. Just run:
`vagrant up`

Includes some mixins I use on a regular basis:

- `clearfix` 


Includes gulp tasks to:

- compile Sass
- autoprefix your css with [PostCSS](https://github.com/postcss/postcss).
- Lint your JS using [ESLint](http://eslint.org/)
- Transpile ES6 to ES5 with [Babel](https://babeljs.io/).
- Load modules with webpack (and transpile with Babel), if you need that.
- Optimize images using imagemin.
- Generate a [modernizr](https://modernizr.com/) file based on tests / css you're using in the project.
- Set up a [Browser Sync](http://www.browsersync.io/) instance

## Todo

- React build and hot loading with webpack.
- Rsync task for deployments.