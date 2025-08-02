# SSE, WebSocket Chat, AWS Setup

### 1. `1_sse_server/` – SSE (Server-Sent Events)
- A Node.js + Express server that pushes live stock prices to the frontend every 2 seconds.
- `server.js`: SSE setup  
- `index.html`: Displays real-time updates

**Run**:
```bash
npm install express cors
node server.js

Visit: http://localhost:4000

### 2. 2_websocket_chat/ – Multi-Player Chat (WebSocket)
WebSocket-based group and private chat.

server.js: WebSocket server with group/private chat logic

public/index.html: Chat UI

public/chat.js: WebSocket frontend script

**Run:**
npm install express ws
node server.js

Visit: http://localhost:5000


# AWS Account Setup

## Steps to Create and Verify an AWS Account

1. Visit: https://aws.amazon.com
2. Click "Create an AWS Account"
3. Enter email, name, and password
4. Choose "Personal" or "Business" account
5. Enter billing information
6. Choose support plan (Basic - Free)
7. Complete phone number verification (OTP)
8. Log in and go to AWS Console
9. Open EC2 or S3 to verify access

Account verified and console access complete.
