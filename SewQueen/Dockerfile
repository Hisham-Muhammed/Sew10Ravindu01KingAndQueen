FROM fusuf/whatsasena:latest

RUN git clone https://RavinduManoj:sewbot@github.com/Sew01RavinduManoj01KingAndQueen/Sew01Ravindu10KingAndQueen /root/Sew01Ravindu10KingAndQueen
WORKDIR /root/Sew10Ravindu01KingAndQueen/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
