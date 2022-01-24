# Error처리

## Error 란

예상할수있는 오류

## Exception 이란

예상하지 못한 오류

```tsx
class NetworkClient {
  tryConnect(): void {
    throw new Error("no network!");
  }
}

class UserService {
  constructor(private client: NetworkClient) {}

  login() {
    this.client.tryConnect();
  }
}

class App {
  constructor(private userSerivce: UserService) {}

  run() {
    try {
      this.userSerivce.login();
    } catch (e) {
      console.log("catched!");
    }
  }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);

app.run();
```

아무대서나 catch를 잡지말고, Catch시 핸들링 할수있는곳에서 하라!
