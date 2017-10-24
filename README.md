# README

*Installation Instructions*

*** Install node.js **
https://nodejs.org/en/


****Install Angular CLI tools****
sudo npm install -g @angular/cli


**Notes on PostgreSQL Database Configuration**
Initial database setup for development

Install postgres
sudo apt-get install postgresql

Install the postgreqs Ruby on Rails gem dependency
sudo apt-get insall libpq-dev



Install the database and dependencies
```bash
$ sudo apt-get update
$ sudo apt-get install postgresql postgresql-contrib libpq-dev
```

Create the database user and set the password to `toor`
```bash
$ sudo -u postgres createuser -s petover
$ sudo -u postgres psql
postgres=# \password petover
postgres=# \q
```

Edit the file `pg_hba.conf`
which should be located at
`/etc/postgresql/9.5/main` or similar
and change 

```
# TYPE  DATABASE        USER    ADDRESS             METHOD

# "local" is for Unix domain socket connections only
local    all             all                        peer
```

to

```
# TYPE  DATABASE        USER    ADDRESS             METHOD

# "local" is for Unix domain socket connections only
local    all             all                        md5
```

Setting up the ruby on rails database and seeding it with data
```bash
cd petover
rake db:drop db:create db:migrate db:seed
```

** Pushing App to Heroku
```bash
git push heroku master
git run rake db:seed
```

* Running the server
rails s

# Pulling from github and building the application
git clone https://github.com/jldaniel/petover.git
cd client
ng build --prod
cd ..
rake db:drop db:create db:migrate db:seed
rails s

