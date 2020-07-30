
## AQL Gram

A bit like Instagram, but for AQL

Built using React frontend on a Laravel backend

## Set up

clone repo by running `git close https://github.com/willmadd/AQLgram.git`

cd into the directory `AQLgram`

run `composer install`

run `npm install`

run `npm run dev`

rename the file `.env.example` to `.env`

run `php artisan key:generate`

run `php artisan serve`

Visit your local server - normally `127.0.0.1:8000` to view AQL gram


### Caveats

Due to the fact I was trying to keep this simple, images are not fetched from a database, but rather hard coded in at `/AQLgram/app/Http/Controllers/ImageController.php`.

In a real application, obviously image data would be fetched from a database!

Also... The 'like' incrementer, due to not working from a database, likes are only changed locally. Again in a real application the database would be updated after every 'like' click!

### Features

Full instagram style site - loading icon will appear until icons are fetched from the server & loaded into the front end for good UI. No more images loading as you watch!!

### Things I Didn't quite finish

Due to time constraints, I only got half way through implementing the multi-language feature. This allows the whole app to change language on the click of a button

This can be seen working if you visit `/AQLgram/resources/js/translations/translator.js` and change `en_GB` to `fr_FR`, the language of AQL gram will change to French.

### Things to add in if I had more time

I was going to add react Router in, so each tab displays on a different URL, but due to time constraints I didn't get a chance!