# README

**Notes on PostgreSQL Database Configuration**
Initial database setup for development

Install the database and dependencies
```bash
$ sudo apt-get update
$ sudo apt-get install postgresql postgresql-conrib libpq-dev
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



This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* Perhaps visitors - FYI C4TMSTR was here.

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
