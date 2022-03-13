# rasa-chat project

## React Project

Install packages

```
yarn install
```

Start developing server

```
yarn start
```

Production

```
yarn build
```

Run on another console the following command. It will start a rasa server on port 5005

```
rasa run --enable-api --cors "*"
```

## Poetry

Install poetry using the instructions on the following link https://python-poetry.org/docs/

## Rasa setup

Install rasa project packages

```
cd rasa-schemas
poetry install
```

Activate the virtual environment

```
poetry shell
```

Train Rasa model

```
rasa train
```

Run action server on a separate shell. Remember to activate the virtual environment

```
rasa run actions
```

Run on another console the following command. It will start a rasa server on port 5005

```
rasa run --enable-api --cors "*"
```
