# Coffee Shop Full Stack

## Full Stack Nanodegree

THIS PROJECT USE PYTHON 3.6.8
THIS PROJECT USE NODE 16.13.2

use nvm and pyenv for versions.

### Auth0 account
```
AUTH0_DOMAIN = 'dev-wv4ktcpt3cic0qi8.us.auth0.com'
ALGORITHMS = ['RS256']
API_AUDIENCE = 'my-api-auth0.com'
```


#### adm account
```
User: udacityprojectsauth0@gmail.com
password: 277847712_A 

eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im1aV2w0NWVrRHZSTFhvZUgtX2ktZCJ9.eyJpc3MiOiJodHRwczovL2Rldi13djRrdGNwdDNjaWMwcWk4LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2NTY2MjNmNzE3YjRiZGI1MDExNzNmN2EiLCJhdWQiOiJteS1hcGktYXV0aDAuY29tIiwiaWF0IjoxNzAxMTkyNzg1LCJleHAiOjE3MDExOTk5ODUsImF6cCI6IlBWdlVHdUFXWmhaZDhESzJUUjVGcHR5MjV5R0dLSzgzIiwic2NvcGUiOiIiLCJwZXJtaXNzaW9ucyI6WyJkZWxldGU6ZHJpbmtzIiwiZ2V0OmRyaW5rcy1kZXRhaWwiLCJwYXRjaDpkcmlua3MiLCJwb3N0OmRyaW5rcyJdfQ.RaP1fHZ2ni-wr1DiD1ZUE3vQ3Syc6SV1UdWTA7Og0RsAXozkH6jOvMV64jbVQYbM23oat1dhvUHlqNnMQSguy3shtA4618TgXbp0RgnOMKKeBY6CUhrjtgZp9EFRWxxVODa01cexJ86PfhzknFXsZAtIJph1cdqUGJzFwk9iNdz18UzuoiiAfhv4OznCzVpDlXTREoRfWTkdtYPpeQcDwMvh7THGC9hf2bP4zGQex3WEPamMkMRllJ161DQ-7h-WmD_Czy_CoHqrsKppMcBYnnpwu_VIbjpU9h0GkZ-pERRnWMbRQwQbyZ5tlH64Q-r7gQvqWRcS9vVP-xU7gUghGA


### POSTman

* Exported collection with configured tokens can be found at: `/backend/udacity-fsnd-udaspicelatte.postman_collection_STUDENT_TOKEN.json`
* Test results containing 20 successful cases: `/backend/udacity-fsnd-udaspicelatte.postman_collection_test_run.json`
* Seed collection remains untouched 


### Backend

* Added Auth0 functionalities
* Implemented RESTful endpoints
* Implemented error handlers
* I've used [YAPF](https://github.com/google/yapf) to enforce python code style

#### Running the app

1. Install dependencies with `pip install -r backend/requirements.txt`
2. Set the `FLASK_APP` variable running `export FLASK_APP=api.py` 
3. Run the app with `flask run --reload`

### Frontend 

* Added the Auth0 variables on `environment.ts` file
* Guarantee that the frontend can be launched upon an `ionic serve` command and the login/token retrieval are functional



### .gitignore

* Added jetbrains folder

### Resources
* https://github.com/udacity/FSND/tree/master/BasicFlaskAuth
* https://github.com/auth0-samples/auth0-python-api-samples/tree/master/00-Starter-Seed