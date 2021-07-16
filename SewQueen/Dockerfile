FROM fusuf/whatsasena:latest

RUN git clone https://RavinduManoj:sewbot@github.com/RavinduManoj/Sew-Bot-By-Ravindu-Manoj /root/Sew10Ravindu01KingAndQueen
WORKDIR /root/Sew10Ravindu01KingAndQueen/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
