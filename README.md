<p align="center">
  <a href="http://findahobbyapp.com/">
  <img src="https://imgur.com/W3jHOFM.png"/>
  </a>
</p>

> A web app that will help you discover the most amazing thing to spend your leisure time on.

## The idea
> Someone said: 
<p>"Find three hobbies you love: one to make you <b>money</b>, one to keep you <b>in shape</b> and one to be <b>creative</b>".</p>

> But there is a problem: with all the different cool things that people do in the world and the little time we have available, it is impossible to try every hobby out there...
> So, how can we find the best new thing?
<p><b>find a Hobby!</b> is a collaborative crowdsourced platform where people can:
  <ul>
  <li> Post their favourite hobby.</li>
  <li> Like or dislike hobbies posted by other users.</li>
  <li> Get recommended hobbies based on their previous liked hobbies.</li>
  </ul>
</p>

## Recommendation Mechanics
> The app uses a [recommendation engine](https://github.com/guymorita/recommendationRaccoon) to provide users with hobbies based on their previous actions. 
> It works like this: 
<ol>
 <li>User 'A' likes hobbies 1, 2 and 3.</li> 
 <li>The app stores a relation between this 3 hobbies. </li>
 <li>User 'B' likes hobbies 1 and 2. </li>
 <li>The app will recommend hobby 3 to user 'B', because it knows that there is a common relation between hobbies 1, 2 and 3.</li>
</ol>
<br/>
<p>
* More people like and dislike hobbies -> better recommendations!
<br/>
* <b>The app doesn't store any private information about the user</b>, only anonymous relations between sessions and hobbies. That's why there is not a need to register or even to put your e-mail to use it!
 </p>

## Hobby Mechanics
> When you like a hobby, it will appear in your 'Liked' section. In there, just tap on it to get redirected to a tutorial where you will learn the first steps on how to get started with this activity.
<p align="center">
  <img src="https://imgur.com/LUqSu42.png" />
  <img src="https://imgur.com/lgHGzWD.png" />
  <img src="https://imgur.com/s6kTZeh.png" />
</p>

## Money, Exercise, Creativity
> Every hobby will have a background split in three colours. Each colour represents the proportion of this three entities that the hobby can provide you with. Remember:"Find three hobbies you love: one to make you <b>money</b>, one to keep you <b>in shape</b> and one to be <b>creative</b>".

## Posting a hobby
> This app is 100% crowdsourced and collaborative. It works with the hobbies that users post. So if you have a cool activity and want to share it with the world, just go to the 'Post' section and input the name, a short description, a link to a picture and a link to a nice get started tutorial of the hobby!

## Screenshots

<p align="center">
  <img src="https://imgur.com/NuDk8QM.png" />
</p>

## Getting started

1. Clone the repo

```
$ git clone https://github.com/jportella93/find-a-hobby-client.git
$ cd find-a-hobby-client
```

2. Install dependencies
```
$ npm install
```

3. Start development server
```
$ npm run main
```

4. Connect client with server.

Now you will be able to post and like hobbies with the deployed production database. 

If you want to use a clean local and fast database (recommended for development): 
1. start development server following instructions of https://github.com/jportella93/find-a-hobby-server
2. In /src/lib/apiClient.js, change the variable URL to point to your IP address followed by the port where you are runnning the server. For example: const URL = 'http://192.168.1.191:3000'

## Built with

* [React](https://github.com/facebook/react) - Front end library for building user interfaces
* [Bootstrap](https://github.com/twbs/bootstrap) - Framework for UI elements.
* [Onsenui](https://github.com/OnsenUI/OnsenUI) - Mobile friendly framework for responsive elements.
* [Font Awesome](https://fontawesome.com/) - Icons library. Used for the football ball, dollar sign and ballon icons.


## Contributing

Any contribution is welcome! UI improvements, features... you name it! Just fork the repository and go nuts, then submit a pull request pointing to this repo.

Some ideas i'm planning to do: 
  - Implement state managment with redux.
  - Responsiveness: Make more desktop friendly.
  - Feature: let users vote on hobby characteristics. 
  - Feature: Comment on hobbies. 
  - Feature: User can find and post where this activities take place near them with geolocation. 
  - Feature: Geoplace where this activities take place near the user.
  - Feature: search hobbies by name.
  - Feature: share hobbies by url.
  - Feature: report hobby, put filter on 'bad' words.
  - Feature: Statistics. Which hobbies are liked with this hobby, how many hobbies are in database...
  
... or any other idea!


## Author

Jon Portella - [Github](https://github.com/jportella93) - [LinkedIn](https://www.linkedin.com/in/jonportella/) - [Twitter](https://twitter.com/jportella93)


## License

This project is licensed under the MIT License.
