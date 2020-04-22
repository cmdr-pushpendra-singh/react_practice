## Steps to run this project
0. Create Main/Base Folder
1. create db folder in this base folder
2. create new db.json file in db folder
    and add following code
    {
        "restaurent": [
            {
            "id": 1,
            "name": "R1",
            "email": "r1@psr.com",
            "rating": "4",
            "address": "address1"
            },
    }

3. Run 'json-server --watch db.json' command in terminal 
    it start your fake db server

    now take git pull of this repo
    
    run npm update or start