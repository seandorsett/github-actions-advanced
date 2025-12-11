FROM alpine:3.18

# Install dependencies
RUN apk add --no-cache bash git

# Copy entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
