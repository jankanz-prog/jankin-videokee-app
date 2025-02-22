to allow react-app accessible by another pc:

    at command prompt:
        netsh advfirewall firewall add rule name="React App" dir=in action=allow protocol=TCP localport=5173

    run the ff:
        npm run build
        npx serve -s dist