
### Cleaning launch data 

When developing our NASA API, we might have made requests and added some data to the DB that doesn't belong (API tests, launch object design) and is polluting our real-life data. This is normal during development, however if we want to demo our API we want to show real and not test data. 

The best approach to take is to clear and reload everything from the correct sources. Our server already has the ability to load the correct planets and launches data when it starts. Thus, we need to clear out the collections in our existing DB to revert to a pristine state. Our API should be able to repopulate our DB. 

To do so, we clear our all the collection in Mongo Atlas. With an empty DB the correct launches and planets data will be loaded once we start the server again. When we go to the mission control dashboard, we will observe the correct launch and planet data!

