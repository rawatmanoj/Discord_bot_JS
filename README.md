# A Discord Music Bot written in JavaScript, the discord.js library and discord.js-commando framework

### Installing the dependencies

`npm i`

### Setup

Make a config.json file in the root directory of the project and add:

```
{
  "prefix": "!",  // You can change the prefix to whatever you want it doesn't have to be - !
  "token": "Your-Bot-Token",
  "tenorAPI": "tenor-API-key",
  "newsAPI": "news-api-key",
  "youtubeAPI": "youtube-api-key",
  "yandexAPI": "yandex-api-key",
  "geniusLyricsAPI": "genius-api-key"
}
```

I run the bot on a debian 9 environment so it might not work as intended on other operating systems(although it should), if you need a guide on how to install node.js on debian 9 or ubuntu I will link one in the resources down below.

Also, no matter what operating system you have, make sure [ffmpeg](https://www.ffmpeg.org/download.html) and [python 2.7](https://www.python.org/downloads/) are installed. **Discord.js now requires Node version greater than or equal to 12.0.0** .

If you are not cloning this repo, make sure your dependencies versions are the same as this repo's.

### Commands

- Music

| Command       | Description                                                                                                               | Usage                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| !play         | Play any song or playlist from youtube, you can do it by searching for a song by name or song url or playlist url         | !play darude sandstorm |
| !pause        | Pause the current playing song                                                                                            | !pause                 |
| !resume       | Resume the current paused song                                                                                            | !resume                |
| !leave        | Leaves voice channel if in one                                                                                            | !leave                 |
| !remove       | Remove a specific song from queue by its number in queue                                                                  | !remove 4              |
| !queue        | Display the song queue                                                                                                    | !queue                 |
| !shuffle      | Shuffle the song queue                                                                                                    | !shuffle               |
| !skip         | Skip the current playing song                                                                                             | !skip                  |
| !skipall      | Skip all songs in queue                                                                                                   | !skipall               |
| !skipto       | Skip to a specific song in the queue, provide the song number as an argument                                              | !skipto 5              |
| !volume       | Adjust song volume                                                                                                        | !volume 80             |
| !loop         | Loop the currently playing song                                                                                           | !loop                  |
| !lyrics       | Get lyrics of any song or the lyrics of the currently playing song                                                        | !lyrics song-name      |

- Misc

| Command      | Description                                                                                                                                                         | Usage                 |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| !cat         | Get a cute cat picture                                                                                                                                              | !cat                  |
| !fortune     | Get a fortune cookie tip                                                                                                                                            | !fortune              |
| !insult      | Generate an evil insult                                                                                                                                             | !insult               |
| !chucknorris | Get a satirical fact about Chuck Norris                                                                                                                             | !chucknorris          |
| !motivation  | Get a random motivational quote                                                                                                                                     | !motivation           |
| !global-news | Latest headlines from reuters, you can change the news source to whatever news source you want, just change the source in line 13 in global-news.js or ynet-news.js | !global-news          |
| !random      | Generate a random number between two provided numbers                                                                                                               | !random 0 100         |
| !reddit      | Replies with 5 top non nsfw subreddit posts                                                                                                                         | !reddit askreddit     |
| !say         | Make the bot say anything                                                                                                                                           | !say Lorem Ipsum      |

- Gifs

| Command   | Description                         | Usage                   |
| --------- | ----------------------------------- | ----------------------- |
| !animegif | Get an anime related gif by a query | !animegif one punch man |
| !gif      | Get any gif by a query              | !gif labrador           |

- Guild

| Command               | Description                     | Usage                                 |
| --------------------- | ------------------------------- | ------------------------------------- |
| !ban                  | Bans a tagged member            | !ban @johndoe                         |
| !kick                 | Kicks a tagged member           | !kick @johndoe                        |
| !prune                | Delete up to 99 recent messages | !prune 50                             |

