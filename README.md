# Project idea

The idea behind the elaboration of this project was to reconcile the functioning between several different technologies in the context of API consumption.

## Challenges

When I was trying to make the puppeteer work properly inside the container in Node I noticed that it was constantly failing. After reading [this article](https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#running-puppeteer-in-docker) on how to install chromium in a container to make everything work properly it ended up solving the problem.

## How to use

First step (build the images):

```bash
docker-compose build
```

Second step (orchestrate and create the containers):

```bash
docker-compose up -d
```

Third step (visit the website):

```
http://localhost
```

Fourth step:

```
Search for the product you want...
```

## Nice to try

If you want to test any of the node apis inside the containers, to test their operation, I recommend using an API Client such as `Postman` or `Insomnia`.

To get the JSON response from the `fnac-api` with the `POST` method, type the following URL:

```
http://localhost/fnac
```

And send a json of this format:

```js
{
  "searchProduct": "PlayStation 5"
}
```

To get the JSON response from the `inter-api` with the `POST` method, type the following URL:

```
http://localhost/inter
```

And send a json of this format:

```js
{
  "searchProduct": "PlayStation 5"
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
