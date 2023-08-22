# nhl-grid

An NHL trivia game where users must name a player that played for the teams given on each row and column. Inspired by similar games including [NHL Grid](https://www.nhlgrid.com/), [Puckdoku](https://www.puckdoku.com/), and [Immaculate Grid](https://www.immaculategrid.com/hockey).

## Setup
Since this app is hosted on a static webpage (through GitHub Pages), the user must run the server on their machine to allow the app to access the suggestions API (used when searching for a player). The following steps must be taken to setup the server.

1. Clone this repository to create a local repository on your computer
```sh
git clone https://github.com/alexrnguyen/nhl-grid.git
```

2. Install all dependencies needed to run nhl-grid
```sh
npm install
```

3. Inside the project directory, start up the server using the following command
```sh
npm run server
```

4. Open the static webpage using the link on this repository. Have fun!

## Upcoming Features

- Save game state when app is closed
- Share a grid with friends
- Rarity scores

## Outstanding Issues

- User must run server.js locally in order for the GET request for searchPlayer() to work as intended
- If a retired player's last team is no longer active (eg. Quebec Nordiques), no image will be returned from getLatestImage()
- Can use the same player more than once
- Players sometimes show up more than once in the search results
- Noticeable delay when first loading up application
- No verification that a grid is solvable (due to Vegas and Seattle having relatively few players who have played for other teams)

## Acknowledgements

- Drew Hynes - Created a [public repository](https://gitlab.com/dword4/nhlapi) demonstrating how to use the public NHL API
- <a target="_blank" href="https://icons8.com/icon/VsWqVLtsYbu2/hockey">Hockey</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> (used as favicon)
