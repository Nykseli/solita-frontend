# solita-frontend

This is a frontend application for [dev-academy-2021](https://github.com/solita/dev-academy-2021)

## How to run

```
git clone https://github.com/Nykseli/solita-frontend
cd solita-frontend

npm install
npm run serve

# Optionally the /apiview page requires the backend to work properly
# You need a go installed in your $PATH
git submodule update --init --recursive
cd backend
go get github.com/gorilla/mux
go run main.go
```



