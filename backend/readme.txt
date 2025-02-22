install these:

pip3 install fastapi  
pip3 install uvicorn

adding redux:
npm install redux react-redux @reduxjs/toolkit

to run the api server locally:
uvicorn song:app --reload

all port in firewall
    netsh advfirewall firewall add rule name="FastAPI" dir=in action=allow protocol=TCP localport=8000

to run/deploy api on a server:
    uvicorn song:app --host 0.0.0.0 --port 8000 --reload


http://127.0.0.1:8000/docs#
