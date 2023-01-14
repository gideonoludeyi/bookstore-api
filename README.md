# Bookstore API

## Getting Started (glitch.com)

Click [here](https://glitch.com/edit/#!/quaint-cactus-comfort) or go to https://glitch.com/edit/#!/quaint-cactus-comfort

Remix the project (registration is optional)

### Start API server (hot-reload)

Open up the terminal on the glitch project and run the following command.

```sh
uvicorn main:app --reload
```

## Getting Started (Local)

### Install package dependencies

Ensure [`python`](https://www.python.org) and `pip` are installed, and run the following command in the terminal.

**MacOS / Linux**

```sh
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

**Windows**

```sh
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
```

### Start API server (hot-reload)

```sh
uvicorn main:app --reload
```

`--reload` enables hot-reloading for development
