FROM node:12

COPY . /app

ENV NODE_ENV production

RUN yarn \
    && yarn next build \
    && yarn next export -o .next-export \
    && rm -rf .next/bundles \
    && ~/.local/bin/aws s3 mv --recursive --cache-control='public, max-age=31536000, immutable' \
       /app/.next-export/_next s3://BUCKET_NAME/_next


ADD deploy.sh /deploy.sh
RUN chmod +x /deploy.sh
ENTRYPOINT ["/deploy.sh"]
