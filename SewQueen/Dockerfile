FROM fusuf/whatsasena:latest

RUN git clone https://Sew01RavinduManoj01KingAndQueen:raviyabot1@github.com/Sew01RavinduManoj01KingAndQueen/Sew01Ravindu10KingAndQueen /root/Sew01Ravindu10KingAndQueen
WORKDIR /root/Sew01Ravindu10KingAndQueen/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
