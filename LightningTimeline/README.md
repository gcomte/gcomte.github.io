# Running the website locally
## The easy way: Using the power of Docker
```
git clone https://github.com/gcomte/gcomte.github.io.git
cd gcomte.github.io

docker run -t --rm -v "$PWD":/usr/src/app -p "4000:4000" starefossen/github-pages
```
Open the lightning timeline in your browser:
http://127.0.0.1:4000/lightning-timeline

## The hard way: Directly on your local machine
### Installing packages (Ubuntu 18.04)

```
sudo apt update
sudo apt upgrade
sudo apt install ruby ruby-dev build-essential cmake zlib1g-dev git
sudo gem install bundler

git clone https://github.com/gcomte/gcomte.github.io.git
cd gcomte.github.io

bundle install
```
### Starting jekyll

```
bundle exec jekyll serve
```
Open the lightning timeline in your browser:
http://127.0.0.1:4000/lightning-timeline
