# 1. Temel imaj: Node.js içeren bir Linux ortamı
FROM node:18-alpine

# 2. Uygulama dizinini oluştur
WORKDIR /app

# 3. Paket dosyalarını kopyala ve yükle
COPY package*.json ./
RUN npm install

# 4. Geri kalan dosyaları kopyala
COPY . .

# 5. Build işlemi
RUN npm run build

# 6. Port belirle (Next.js default: 3000)
EXPOSE 3000

# 7. Uygulamayı başlat
CMD ["npm", "start"]
