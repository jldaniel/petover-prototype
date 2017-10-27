# README

*Installation Instructions*

These instructions assume the OS is Ubuntu 16.04. If using another operating system we recommend configuring a Virtual Machine running Ubuntu 16.04 to deploy and develop the application. 

If you do not have any virtualization software already installed, Virtual Box can be used and is freely available at 

[Virtual Box](https://www.virtualbox.org/wiki/Downloads)

*Note that there have been issues when using the performance issues with standard installs of Ubuntu on Virtual Box when using Mac OS X so it is recommented that Ubuntu Server without a graphical interface be used instead. 

#### Install git
```bash
sudo apt-get update
sudo apt-get install git
```

__OPTIONAL__ configure git with an SSH key if you don't like typing in your github credentials when pushing or pulling from the repository.
```bash
git config --global color.ui true
git config --global user.name "YOUR NAME"
git config --global user.email "YOUR@EMAIL.com"
ssh-keygen -t rsa -b 4096 -C "YOUR@EMAIL.com"
```

Take the newly generated SSH key and add it to your Github account. Copy and paste the output of the following command and [paste it here](https://github.com/settings/keys)

```bash
cat ~/.ssh/id_rsa.pub
```

Once you've done this, you can check and see if it worked:
```bash
ssh -T git@github.com
```

and you should get a message like 
```
Hi username You've successfully authenticated, but GitHub does not provide shell access.
```

#### Clone the source code from git
```bash
cd ~/
mkdir PetOver
cd PetOver
git clone https://github.com/jldaniel/petover.git
```

Note that if this fails, you may have not been added as a collaborated to the repository. Contact Jason Daniel if this appears to be the case.

#### Install Ruby

```bash
sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev python-software-properties libffi-dev nodejs

sudo apt-get install libgdbm-dev libncurses5-dev automake libtool bison libffi-dev

gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3

curl -sSL https://get.rvm.io | bash -s stable

source ~/.rvm/scripts/rvm

rvm install 2.4.2

rvm use 2.4.2 --default

ruby -v
```

Next install Bundler

```bash
gem install bundler
```


#### Install nodejs

Nodejs can be installed a couple different ways, from the command line we can do

```bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```

If on Mac or Windows, nodejs can be obtained via a graphical installer avialable [here](https://nodejs.org/en/)

#### Install Rails
Note that we are currently using Rails v5.1.4 

```bash
gem install rails -v 5.1.4
rails -v
```

The last command should display `Rails 5.1.4` is everything worked.

#### Install Angular CLI tools
sudo npm install -g @angular/cli


#### Install and configure the PostgreSQL database

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

_Note the file can be edited via the terminal by using the `vi` editor

```bash
vi /etc/prosgresql/9.5/main
```

with the file open press `i` to insert text into the file, then once finished, to exit and save changes press `ESC :wq`, otherwise to exit without saving changes enter `ESC :q!`



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

#### Build the app

Install the server side dependencies

```bash
cd petover
bundle install
```

Install the client dependencies
```bash
cd client
npm install
```

Build the client
```bash
ng build --prod
```


Build the database
```bash
cd ..
rake db:drop db:create db:migrate db:seed
```

To see if things are working and view the app locally run

```bash
rails s
```

to start the server, then on a browser navigate to `localhost:3000` to use the app


#### Pushing App to Heroku
Heroku has served as our live test environment [Heroku](https://www.heroku.com/about). If you have not already done so, go the the Heroku site and create an account.

Install the heroku command line tools
```bash
wget -qO- https://cli-assets.heroku.com/install-ubuntu.sh | sh
```

Deploy the app to heroku, 

```bash
cd petover
git push heroku master
git run rake db:seed
```

Once the app has been deployed, in the terminal output you should see a link to your deployed app. The link can also be found by going to your Heroku dashboard and looking at your deployed apps.



