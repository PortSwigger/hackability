Rendering Engine Hackability Probe performs a variety of tests to discover what the unknown rendering engine supports. To use it simply extract it to your web server and visit the url in the rendering engine you want to test. The more successful probes you get the more likely the target engine is vulnerable to attack.

For further information, please refer to the whitepaper at [https://portswigger.net/research/cracking-the-lens-targeting-https-hidden-attack-surface](https://portswigger.net/research/cracking-the-lens-targeting-https-hidden-attack-surface)

You can find a public demo here: https://portswigger-labs.net/hackability/

# How run
```
docker stop hackability
docker rm hackability
docker run --rm -it --name="hackability" -v `pwd`:/var/www/html -p 8081:8080  trafex/php-nginx:latest 

open http://127.0.0.1:8081
```