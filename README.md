
# VelocityComputers

A web app for users who wish to create PC builds and share them with other users.

## Installation

Once the repo is cloned, run npm install. You will also need to clone the server-side repo and run the server to access.

Link to server-side repo: https://github.com/rickycanepa/velocitycomputers-server

```bash
  git clone git@github.com:rickycanepa/velocitycomputers-client.git
  npm install
  npm start
```

## Features

Users can create view a feed of user created PC builds.

![PC Feed](https://i.gyazo.com/3d07d84bb41429e2e150151bf23a7911.mp4)

Users can favorite and unfavorite builds, and navigate to my favorites to view their favorites.

![Favorites](https://i.gyazo.com/610ab5202d753ca68330981abf905f0c.mp4)

Users can sort the PC feed from most to least favorited.

![Sort](https://i.gyazo.com/20835943d8bfc5ed7fd596b92a6ff929.mp4)

Users can create a PC build. The price will dynamically render at the bottom as each part is selected.

![create](https://i.gyazo.com/790d6b4b645afd25a2be3b09791f7a74.mp4)

Users can view a list of their builds, where you can also edit and delete builds they have created.

![My builds](https://i.gyazo.com/26119e8865b70949dee61ce7a3659b85.mp4)

## Tech Stack Used

This app was created by leveraging ReactJS, Tailwind CSS, Python/Django, and SQLite.
