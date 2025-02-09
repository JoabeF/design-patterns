interface Options {
  metadata?: Record<string, any>;
  sampleRate?: number;
  environment: "development" | "production";
}

class ScreenRecorder {
  private key: string;
  private isRecording: boolean = false;
  private session: string;
  private options: Options;

  constructor(key: string, session: string, options: Options) {
    this.key = key;
    this.session = session;
    this.options = options;
  }

  start() {
    if (!this.isRecording) {
      console.log("Recording started");

      this.isRecording = true;
    } else {
      console.log("Already recording");
    }
  }

  stop() {
    console.log("Recording stopped");

    this.isRecording = false;
  }
}

const privateKey = "some-private-key";
const sessionId = "some-session-id";
const options: Options = {
  metadata: {
    userEmail: "email@example.com",
  },
  sampleRate: 1,
  environment: "development",
};

// Singleton is required because it can break the current recording process by creating a new instance
class ScreenRecorderSingleton {
  private static instance: ScreenRecorder;

  static getInstance() {
    if (ScreenRecorderSingleton.instance == null) {
      console.log("Creating new instance.");

      ScreenRecorderSingleton.instance = new ScreenRecorder(
        privateKey,
        sessionId,
        options
      );
    } else {
      console.log("Using existing instance!");
    }

    return ScreenRecorderSingleton.instance;
  }
}

console.log("\n");

const instance1 = ScreenRecorderSingleton.getInstance();
const instance2 = ScreenRecorderSingleton.getInstance();

console.log("\n");
console.log("instance 1", instance1);
console.log("instance 2", instance2);

console.log("\n");

instance1.start();
instance2.start();
